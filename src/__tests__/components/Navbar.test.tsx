import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

vi.mock("next/image", () => ({
    default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
        <a href={href} {...props}>
            {children}
        </a>
    ),
}));

describe("Navbar", () => {
    it("renders site name", () => {
        render(<Navbar />);
        expect(screen.getByText("Samiul Alim")).toBeInTheDocument();
    });

    it("renders navigation items", () => {
        render(<Navbar />);
        // Items appear in both desktop and mobile nav
        expect(screen.getAllByText("Projects").length).toBe(2);
        expect(screen.getAllByText("Experience").length).toBe(2);
        expect(screen.getAllByText("Skills").length).toBe(2);
        expect(screen.getAllByText("About").length).toBe(2);
        expect(screen.getAllByText("Contact").length).toBe(2);
    });

    it("renders Resume button in desktop nav", () => {
        render(<Navbar />);
        const resumeButtons = screen.getAllByText("Resume");
        expect(resumeButtons.length).toBeGreaterThanOrEqual(1);
    });

    it("renders an accessible mobile menu toggle", () => {
        render(<Navbar />);
        const toggle = screen.getByRole("button", { name: "Open navigation menu" });
        expect(toggle).toBeInTheDocument();
        expect(toggle).toHaveAttribute("aria-expanded", "false");
        expect(toggle).toHaveAttribute("aria-controls");
        expect(toggle).toHaveAccessibleName("Open navigation menu");
    });
});
