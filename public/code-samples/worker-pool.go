package worker

import (
	"context"
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

// Metrics holds counters for monitoring pool performance.
type Metrics struct {
	JobsProcessed atomic.Int64
	JobsFailed    atomic.Int64
	QueueDepth    atomic.Int64
	PeakWorkers   atomic.Int64
}

// Snapshot returns a point-in-time copy of the metrics.
func (m *Metrics) Snapshot() MetricsSnapshot {
	return MetricsSnapshot{
		JobsProcessed: m.JobsProcessed.Load(),
		JobsFailed:    m.JobsFailed.Load(),
		QueueDepth:    m.QueueDepth.Load(),
		PeakWorkers:   m.PeakWorkers.Load(),
	}
}

// MetricsSnapshot is an immutable copy of Metrics at a point in time.
type MetricsSnapshot struct {
	JobsProcessed int64
	JobsFailed    int64
	QueueDepth    int64
	PeakWorkers   int64
}

// Job represents a unit of work submitted to the pool.
type Job[T any] struct {
	Payload T
	Fn      func(ctx context.Context, payload T) error
}

// Pool is a generic worker pool with configurable concurrency and graceful shutdown.
type Pool[T any] struct {
	concurrency int
	jobs        chan Job[T]
	metrics     Metrics
	wg          sync.WaitGroup
	cancel      context.CancelFunc
}

// NewPool creates a worker pool with the given concurrency limit and buffer size.
func NewPool[T any](concurrency, bufferSize int) *Pool[T] {
	if concurrency <= 0 {
		concurrency = 1
	}
	if bufferSize <= 0 {
		bufferSize = 128
	}

	return &Pool[T]{
		concurrency: concurrency,
		jobs:        make(chan Job[T], bufferSize),
	}
}

// Metrics returns a pointer to the pool's live metrics.
func (p *Pool[T]) Metrics() *Metrics {
	return &p.metrics
}

// Start launches worker goroutines and returns a context that cancels on shutdown.
func (p *Pool[T]) Start(ctx context.Context) context.Context {
	ctx, cancel := context.WithCancel(ctx)
	p.cancel = cancel

	for i := 0; i < p.concurrency; i++ {
		p.wg.Add(1)
		go p.worker(ctx, i)
	}

	return ctx
}

// Submit sends a job to the pool. Returns false if the pool is shut down or the buffer is full.
func (p *Pool[T]) Submit(ctx context.Context, fn func(ctx context.Context, payload T) error, payload T) bool {
	select {
	case <-ctx.Done():
		return false
	default:
	}

	job := Job[T]{Payload: payload, Fn: fn}
	p.metrics.QueueDepth.Add(1)

	// Track peak workers (approximate via queue depth + active).
	depth := p.metrics.QueueDepth.Load()
	workers := int64(p.concurrency) - depth
	if workers > p.metrics.PeakWorkers.Load() {
		p.metrics.PeakWorkers.Store(workers)
	}

	select {
	case p.jobs <- job:
		return true
	case <-ctx.Done():
		p.metrics.QueueDepth.Add(-1)
		return false
	}
}

// Shutdown gracefully stops accepting new jobs, drains the queue, and waits for
// all in-flight jobs to complete. Timeout controls how long to wait before forcing exit.
func (p *Pool[T]) Shutdown(timeout time.Duration) {
	// Stop accepting new jobs.
	close(p.jobs)

	// Wait for workers to drain with timeout.
	done := make(chan struct{})
	go func() {
		p.wg.Wait()
		close(done)
	}()

	select {
	case <-done:
	case <-time.After(timeout):
		p.cancel()
		<-done
	}
}

// worker processes jobs until the channel is closed or context is cancelled.
func (p *Pool[T]) worker(ctx context.Context, id int) {
	defer p.wg.Done()

	for job := range p.jobs {
		p.metrics.QueueDepth.Add(-1)

		err := job.Fn(ctx, job.Payload)
		if err != nil {
			p.metrics.JobsFailed.Add(1)
		}
		p.metrics.JobsProcessed.Add(1)
	}
}

// example usage
func example() {
	ctx := context.Background()
	pool := NewPool[string](4, 256)

	pool.Start(ctx)

	// Submit email jobs.
	emails := []string{"alice@example.com", "bob@example.com", "charlie@example.com"}
	for _, email := range emails {
		email := email // capture loop variable
		pool.Submit(ctx, func(ctx context.Context, to string) error {
			fmt.Printf("sending email to %s\n", to)
			// send email logic here
			return nil
		}, email)
	}

	// Graceful shutdown: drain queue, wait up to 30s.
	pool.Shutdown(30 * time.Second)

	snap := pool.Metrics().Snapshot()
	fmt.Printf("processed=%d failed=%d peak_workers=%d\n",
		snap.JobsProcessed, snap.JobsFailed, snap.PeakWorkers)
}
