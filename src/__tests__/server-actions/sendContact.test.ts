import { describe, expect, it, vi } from "vitest";

const cookieGetMock = vi.fn(() => undefined);

// Mock next/headers
vi.mock("next/headers", () => ({
    cookies: vi.fn(() => ({
        get: cookieGetMock,
        set: vi.fn(),
    })),
}));

const { sendContact } = await import("@/server-actions/sendContact");

describe("sendContact server action", () => {
    it("returns error when name is empty", async () => {
        const result = await sendContact({ status: "idle", message: null }, new FormData());
        expect(result.status).toBe("error");
        expect(result.message).toBe("Please fill out all fields.");
    });

    it("returns error when email is missing", async () => {
        const fd = new FormData();
        fd.set("name", "Test User");
        fd.set("message", "Hello");
        const result = await sendContact({ status: "idle", message: null }, fd);
        expect(result.status).toBe("error");
        expect(result.message).toBe("Please fill out all fields.");
    });

    it("returns error when message is missing", async () => {
        const fd = new FormData();
        fd.set("name", "Test User");
        fd.set("email", "test@example.com");
        const result = await sendContact({ status: "idle", message: null }, fd);
        expect(result.status).toBe("error");
        expect(result.message).toBe("Please fill out all fields.");
    });

    it("returns error when DISCORD webhook is not configured", async () => {
        const fd = new FormData();
        fd.set("name", "Test User");
        fd.set("email", "test@example.com");
        fd.set("message", "Hello");

        const result = await sendContact({ status: "idle", message: null }, fd);
        expect(result.status).toBe("error");
        expect(result.message).toBe("Server is not configured to send messages.");
    });

    it("does not throw on a malformed rate-limit cookie", async () => {
        cookieGetMock.mockReturnValue({ value: "{not-json" });

        const fd = new FormData();
        fd.set("name", "Test User");
        fd.set("email", "test@example.com");
        fd.set("message", "Hello");

        const result = await sendContact({ status: "idle", message: null }, fd);
        expect(result.status).toBe("error");
        expect(result.message).toBe("Server is not configured to send messages.");

        cookieGetMock.mockReturnValue(undefined);
    });
});
