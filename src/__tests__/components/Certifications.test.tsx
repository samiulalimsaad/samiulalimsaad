import { render, screen } from "@testing-library/react";
import Certifications from "@/components/sections/Certifications";
import { certifications } from "@/lib/certifications";

describe("Certifications", () => {
    it("renders the heading and every credential", () => {
        render(<Certifications />);
        expect(screen.getByRole("heading", { name: "Certifications" })).toBeInTheDocument();
        for (const certification of certifications) {
            expect(screen.getByRole("heading", { name: certification.name })).toBeInTheDocument();
            expect(screen.getByText(certification.issuer)).toBeInTheDocument();
        }
    });

    it("opens each verification link in a new safe tab", () => {
        render(<Certifications />);
        const links = screen.getAllByRole("link", { name: /^Verify .+ on Coursera$/ });
        expect(links).toHaveLength(certifications.length);

        for (const [index, certification] of certifications.entries()) {
            expect(links[index]).toHaveAttribute("href", certification.verifyUrl);
            expect(links[index]).toHaveAttribute("target", "_blank");
            expect(links[index]).toHaveAttribute("rel", "noopener noreferrer");
        }
    });
});
