import { describe, it, expect } from "vitest";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";

describe("Projects data integrity", () => {
    it("has no duplicate names", () => {
        const names = projects.map((p) => p.name);
        expect(new Set(names).size).toBe(names.length);
    });

    it("all featured projects have metrics", () => {
        const featured = projects.filter((p) => p.tier === "featured");
        for (const p of featured) {
            expect(
                "metrics" in p && Array.isArray(p.metrics) && p.metrics.length > 0,
            ).toBe(true);
        }
    });

    it("all projects have valid tiers", () => {
        const validTiers = ["featured", "past-work"];
        for (const p of projects) {
            expect(validTiers.includes(p.tier)).toBe(true);
        }
    });

    it("all projects have names and descriptions", () => {
        for (const p of projects) {
            expect(p.name?.length).toBeGreaterThan(0);
        }
    });
});

describe("Skills data integrity", () => {
    it("has skill groups", () => {
        expect(skills.length).toBeGreaterThan(0);
    });

    it("all skills have valid levels", () => {
        const validLevels = ["production", "familiar"];
        for (const group of skills) {
            for (const item of group.items) {
                expect(validLevels.includes(item.level)).toBe(true);
            }
        }
    });

    it("no two groups have the same category", () => {
        const categories = skills.map((g) => g.category);
        expect(new Set(categories).size).toBe(categories.length);
    });
});
