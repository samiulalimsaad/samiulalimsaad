import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getAllGistMeta } from "@/lib/gists";
import { projectStatusMap, projects } from "@/lib/projects";
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

    it("all projects have evidenceLevel", () => {
        for (const p of projects) {
            expect("evidenceLevel" in p && typeof p.evidenceLevel).toBe("string");
        }
    });

    it("status map covers all projects", () => {
        for (const p of projects) {
            expect(projectStatusMap[p._id]).toBeDefined();
        }
    });

    it("development and MVP projects cannot claim production", () => {
        for (const [id, meta] of Object.entries(projectStatusMap)) {
            if (!meta.canClaimProduction) {
                const project = projects.find((p) => p._id === id);
                expect(project).toBeDefined();
                expect(project!.status.toLowerCase()).not.toBe("production");
            }
        }
    });

    it("auth service remains pre-production", () => {
        const auth = projects.find((p) => p._id === "featured-2");
        expect(auth).toBeDefined();
        expect(auth!.status).toContain("awaiting production");
    });

    it("payment service remains in development", () => {
        const pay = projects.find((p) => p._id === "ph-payment-service");
        expect(pay).toBeDefined();
        expect(pay!.status).toBe("In development");
    });

    it("ai game platform remains MVP", () => {
        const ai = projects.find((p) => p._id === "ai-game-platform");
        expect(ai).toBeDefined();
        expect(ai!.status).toBe("MVP");
    });

    it("five projects are proprietary to Programming Hero", () => {
        const proprietary = projects.filter((p) => p.proprietary);
        expect(proprietary.length).toBe(5);
    });

    it("speakSail is not proprietary", () => {
        const ss = projects.find((p) => p._id === "featured-4");
        expect(ss).toBeDefined();
        expect(ss!.proprietary).toBe(false);
    });

    it("ai game platform is public", () => {
        const ai = projects.find((p) => p._id === "ai-game-platform");
        expect(ai).toBeDefined();
        expect(ai!.proprietary).toBe(false);
    });

    it("proprietary projects have case study links", () => {
        const proprietary = projects.filter((p) => p.proprietary);
        for (const p of proprietary) {
            expect(p.caseStudyLink).toBeDefined();
            expect(p.caseStudyLink).toMatch(/^\/projects\//);
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
        const gists = getAllGistMeta();
        expect(gists.length).toBeGreaterThan(0);
    });

    it("all gists have required fields", () => {
        const gists = getAllGistMeta();
        for (const gist of gists) {
            expect(gist.slug.length).toBeGreaterThan(0);
            expect(gist.title.length).toBeGreaterThan(0);
            expect(gist.description.length).toBeGreaterThan(0);
        }
    });

    it("no duplicate slugs", () => {
        const gists = getAllGistMeta();
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
        // Production started Aug 2024, so max realistic value is ~2 years
        expect(years).toBeLessThanOrEqual(2);
    });
});

describe("README content integrity", () => {
    const readme = fs.readFileSync(path.resolve("README.md"), "utf-8");

    it("contains backend/platform positioning", () => {
        expect(readme).toContain("Backend & Platform Software Engineer");
    });

    it("contains portfolio link", () => {
        expect(readme).toContain("samiulalimsaad.com");
    });

    it("contains resume link", () => {
        expect(readme).toContain("samiul-alim-resume.pdf");
    });

    it("does not contain decorative stats widgets", () => {
        expect(readme).not.toContain("github-stats-extended");
        expect(readme).not.toContain("streak-stats");
        expect(readme).not.toContain("github-readme-activity-graph");
    });

    it("marks auth service as pre-production", () => {
        expect(readme).toContain("Pre-production");
    });

    it("marks payment service as in development", () => {
        expect(readme).toContain("In development");
    });

    it("marks EduPlay as MVP or hackathon", () => {
        expect(readme.toLowerCase()).toContain("hackathon mvp");
    });
});
