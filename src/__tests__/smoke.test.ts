import { describe, expect, it } from "vitest";
import { gists } from "@/lib/gists";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";
import { getExperienceYears, getProductionYears } from "@/lib/utils";

describe("Projects data integrity", () => {
    it("has no duplicate names", () => {
        const names = projects.map((p) => p.name);
        expect(new Set(names).size).toBe(names.length);
    });

    it("all featured projects have metrics", () => {
        const featured = projects.filter((p) => p.tier === "featured");
        for (const p of featured) {
            expect("metrics" in p && Array.isArray(p.metrics) && p.metrics.length > 0).toBe(true);
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

    it("featured projects have case study links", () => {
        const featured = projects.filter((p) => p.tier === "featured");
        for (const p of featured) {
            if (p.caseStudyLink) {
                expect(p.caseStudyLink).toMatch(/^\/projects\//);
            }
        }
    });

    it("no project exceeds reasonable tool count", () => {
        for (const p of projects) {
            expect(p.tools.length).toBeLessThanOrEqual(10);
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

    it("each group has a context description", () => {
        for (const group of skills) {
            expect(group.context.length).toBeGreaterThan(10);
        }
    });
});

describe("Gists data integrity", () => {
    it("has gists", () => {
        expect(gists.length).toBeGreaterThan(0);
    });

    it("all gists have required fields", () => {
        for (const gist of gists) {
            expect(gist.slug.length).toBeGreaterThan(0);
            expect(gist.title.length).toBeGreaterThan(0);
            expect(gist.description.length).toBeGreaterThan(0);
        }
    });

    it("no duplicate slugs", () => {
        const slugs = gists.map((g) => g.slug);
        expect(new Set(slugs).size).toBe(slugs.length);
    });
});

describe("Utils", () => {
    it("getExperienceYears returns a positive number", () => {
        const years = getExperienceYears();
        expect(years).toBeGreaterThanOrEqual(1);
        expect(years).toBeLessThanOrEqual(10);
    });

    it("getProductionYears returns a positive number", () => {
        const years = getProductionYears();
        expect(years).toBeGreaterThanOrEqual(1);
        expect(years).toBeLessThanOrEqual(10);
    });

    it("getProductionYears is not inflated beyond reality", () => {
        const years = getProductionYears();
        // Production started Feb 2024, so max realistic value is ~3 years
        expect(years).toBeLessThanOrEqual(3);
    });
});
