import { describe, expect, it } from "vitest";
import { certifications } from "@/lib/certifications";
import { getAiContext } from "@/lib/knowledge";

describe("Certifications data integrity", () => {
    it("contains the six verified specializations", () => {
        expect(certifications).toHaveLength(6);
    });

    it("has unique IDs and names", () => {
        const ids = certifications.map((certification) => certification.id);
        const names = certifications.map((certification) => certification.name);
        expect(new Set(ids).size).toBe(ids.length);
        expect(new Set(names).size).toBe(names.length);
    });

    it("links to valid Coursera specialization credentials", () => {
        for (const certification of certifications) {
            const url = new URL(certification.verifyUrl);
            expect(url.protocol).toBe("https:");
            expect(url.hostname).toBe("www.coursera.org");
            expect(url.pathname).toBe(
                `/account/accomplishments/specialization/${certification.id}`,
            );
        }
    });

    it("has non-empty issuer, focus, and plausible completion dates", () => {
        for (const certification of certifications) {
            expect(certification.issuer.length).toBeGreaterThan(2);
            expect(certification.focus.length).toBeGreaterThan(10);
            expect(certification.completed).toMatch(/^[A-Z][a-z]{2} \d{4}$/);
            expect(certification.completedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
            expect(Number.isNaN(Date.parse(certification.completedAt))).toBe(false);
        }
    });

    it("orders credentials newest first", () => {
        const timestamps = certifications.map((certification) =>
            Date.parse(certification.completedAt),
        );
        expect(timestamps).toEqual([...timestamps].sort((a, b) => b - a));
    });

    it("surfaces every credential in the AI context", () => {
        const context = getAiContext();
        for (const certification of certifications) {
            expect(context).toContain(certification.name);
            expect(context).toContain(certification.issuer);
            expect(context).toContain(certification.verifyUrl);
        }
    });
});
