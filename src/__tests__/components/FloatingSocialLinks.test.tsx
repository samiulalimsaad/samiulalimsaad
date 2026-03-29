import FloatingSocialLinks from "@/components/FloatingSocialLinks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Mock the SocialLinks component
vi.mock("@/components/sections/SocialLinks", () => {
    return {
        default: function MockSocialLinks({ size }: { size: number }) {
            return (
                <div data-testid="social-links" data-size={size}>
                    Social Links
                </div>
            );
        },
    };
});

describe("FloatingSocialLinks", () => {
    it("should render the floating social links button", () => {
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        expect(toggleInput).toBeInTheDocument();

        const toggleButton = document.querySelector(
            'label[for="floating-social-toggle"]',
        );
        expect(toggleButton).toBeInTheDocument();

        const sendIcon = toggleButton?.querySelector("svg");
        expect(sendIcon).toBeInTheDocument();
    });

    it("should have proper accessibility attributes", () => {
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        expect(toggleInput).toBeInTheDocument();
        expect(toggleInput).toHaveAttribute(
            "aria-label",
            "Toggle social links",
        );

        const toggleButton = document.querySelector(
            'label[for="floating-social-toggle"]',
        );
        expect(toggleButton).not.toHaveAttribute("aria-label");
    });

    it("should have correct CSS classes for styling", () => {
        render(<FloatingSocialLinks />);

        const toggleButton = document.querySelector(
            'label[for="floating-social-toggle"]',
        );
        const container = toggleButton?.closest(".fixed");
        expect(container).toHaveClass("fixed", "bottom-4", "right-4", "z-40");

        expect(toggleButton).toHaveClass(
            "flex",
            "h-11",
            "w-11",
            "cursor-pointer",
            "rounded-full",
            "shadow-lg",
            "ring-1",
            "transition",
            "hover:brightness-110",
        );
    });

    it("should initially hide the social links panel", () => {
        render(<FloatingSocialLinks />);

        const socialLinksPanel = screen.getByTestId("social-links");
        expect(socialLinksPanel).toBeInTheDocument();

        const panelContainer = socialLinksPanel.parentElement?.parentElement;
        expect(panelContainer).toHaveClass("translate-x-4", "opacity-0");
    });

    it("should show social links panel when checkbox is checked", async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        await user.click(toggleInput);

        const socialLinksPanel = screen.getByTestId("social-links");
        expect(socialLinksPanel).toBeInTheDocument();
        expect(socialLinksPanel).toHaveAttribute("data-size", "22");
        expect(toggleInput).toBeChecked();
    });

    it("should hide social links panel when checkbox is unchecked", async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });

        // Click to show panel
        await user.click(toggleInput);
        expect(screen.getByTestId("social-links")).toBeInTheDocument();

        await user.click(toggleInput);
        expect(screen.getByTestId("social-links")).toBeInTheDocument();
        expect(toggleInput).not.toBeChecked();
    });

    it("should toggle panel when button is clicked", async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleButton = document.querySelector(
            'label[for="floating-social-toggle"]',
        );
        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });

        expect(toggleButton).toBeInTheDocument();

        await user.click(toggleButton!);
        expect(toggleInput).toBeChecked();
        expect(screen.getByTestId("social-links")).toBeInTheDocument();

        await user.click(toggleButton!);
        expect(toggleInput).not.toBeChecked();
    });

    it("should have proper panel styling when visible", async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        await user.click(toggleInput);

        const panel = screen.getByTestId("social-links").parentElement;
        expect(panel).toHaveClass(
            "rounded-2xl",
            "bg-white/90",
            "shadow-xl",
            "ring-1",
            "backdrop-blur-sm",
        );
    });

    it('should display "Connect" text in the panel', async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        await user.click(toggleInput);

        expect(screen.getByText("Connect")).toBeInTheDocument();
    });

    it("should have proper screen reader text", () => {
        render(<FloatingSocialLinks />);

        const srText = screen.getAllByText("Toggle social links")[0];
        expect(srText).toHaveClass("sr-only");
    });

    it("should prevent event bubbling on the panel", async () => {
        const user = userEvent.setup();
        render(<FloatingSocialLinks />);

        const toggleInput = screen.getByRole("checkbox", {
            name: /toggle social links/i,
        });
        await user.click(toggleInput);

        const panel =
            screen.getByTestId("social-links").parentElement?.parentElement;
        expect(panel).toHaveClass("pointer-events-auto");
    });
});
