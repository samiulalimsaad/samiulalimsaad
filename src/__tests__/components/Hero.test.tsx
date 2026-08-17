import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

vi.mock("next/image", () => ({
    default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

describe("Hero", () => {
    it("renders name", () => {
        render(<Hero />);
        expect(screen.getByText(/Samiul Alim/)).toBeInTheDocument();
    });

    it("renders CTA buttons", () => {
        render(<Hero />);
        expect(screen.getByText("View Case Studies")).toBeInTheDocument();
        expect(screen.getByText("Resume")).toBeInTheDocument();
    });

    it("renders social links", () => {
        render(<Hero />);
        expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
        expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("shows open to remote badge", () => {
        render(<Hero />);
        expect(screen.getByText("Open to remote roles")).toBeInTheDocument();
    });

    it("shows tech stack badge", () => {
        render(<Hero />);
        expect(screen.getByText("Go · TypeScript · PostgreSQL")).toBeInTheDocument();
    });
});
