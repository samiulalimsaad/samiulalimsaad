import { describe, expect, it } from "vitest";
import { experienceFacts, getAiContext, profile } from "@/lib/knowledge";
import { SITE_URL } from "@/lib/site";

describe("canonical knowledge layer", () => {
    it("keeps canonical URL and social links absolute", () => {
        expect(SITE_URL).toBe("https://www.samiulalimsaad.com");
        expect(profile.social.linkedin).toBe("https://www.linkedin.com/in/samiulalimsaad");
        expect(new URL(profile.social.github).protocol).toBe("https:");
    });

    it("preserves confirmed employment facts and provenance", () => {
        expect(experienceFacts[0]).toMatchObject({
            title: "Software Engineer",
            employer: "Programming Hero (Technology Team)",
            start: "Aug 2024",
            end: "Present",
        });
        expect(experienceFacts[3].technologies).toContain("MySQL");
        expect(experienceFacts.every((fact) => fact.provenance.length > 0)).toBe(true);
    });

    it("does not expose phone or production claim for unreleased auth service", () => {
        const context = getAiContext();
        expect(context).toContain("complete but unreleased");
        expect(context.toLowerCase()).not.toContain("phone number:");
    });

    it("includes portfolio and secondary project evidence", () => {
        const context = getAiContext();
        expect(context).toContain("PH Mailer");
        expect(context).toContain("LinkedIn-only secondary projects");
        expect(context).toContain("React Drag And Drop");
        expect(context).toContain("/llms.txt");
    });
});
