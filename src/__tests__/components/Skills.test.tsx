import { render, screen } from "@testing-library/react";
import Skills from "@/components/sections/Skills";

describe("Skills", () => {
    it("renders section heading", () => {
        render(<Skills />);
        expect(screen.getByText("Engineering Impact Areas")).toBeInTheDocument();
    });

    it("renders skill categories", () => {
        render(<Skills />);
        expect(screen.getByText("Authentication & Identity")).toBeInTheDocument();
        expect(screen.getByText("Backend Services")).toBeInTheDocument();
        expect(screen.getByText("Data & Storage")).toBeInTheDocument();
    });

    it("shows familiar labels for lower-confidence skills", () => {
        render(<Skills />);
        const familiarLabels = screen.getAllByText("familiar");
        expect(familiarLabels.length).toBeGreaterThanOrEqual(4);
    });

    it("renders context descriptions", () => {
        render(<Skills />);
        // All context strings start with text describing the category
        const descriptions = screen.getAllByText(
            /auth|delivery|abstraction|design|persistence|containerization|ssr/i,
        );
        expect(descriptions.length).toBeGreaterThanOrEqual(3);
    });
});
