import { render, screen } from "@testing-library/react";
import ContactForm from "@/components/sections/ContactForm";

describe("ContactForm", () => {
    it("renders form heading", () => {
        render(<ContactForm />);
        expect(screen.getByText("Send me a message")).toBeInTheDocument();
    });

    it("renders name input", () => {
        render(<ContactForm />);
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });

    it("renders email input", () => {
        render(<ContactForm />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("renders message textarea", () => {
        render(<ContactForm />);
        expect(screen.getByLabelText("Message")).toBeInTheDocument();
    });

    it("renders submit button", () => {
        render(<ContactForm />);
        expect(screen.getByText("Send Message")).toBeInTheDocument();
    });

    it("renders reply estimate", () => {
        render(<ContactForm />);
        expect(screen.getByText(/replies within a day/i)).toBeInTheDocument();
    });
});
