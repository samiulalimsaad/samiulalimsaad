import { fireEvent, render, screen } from "@testing-library/react";
import AskAI from "@/components/AskAI";

describe("AskAI", () => {
    it("opens platform options from trigger", () => {
        render(<AskAI />);

        const trigger = screen.getByRole("button", { name: "Ask AI" });
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

        fireEvent.click(trigger);

        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Open ChatGPT" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Open Gemini" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Open Claude" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Open Grok" })).toBeInTheDocument();
        expect(trigger).toHaveAttribute("aria-expanded", "true");
    });

    it("closes popup with Escape", () => {
        render(<AskAI />);
        const trigger = screen.getByRole("button", { name: "Ask AI" });

        fireEvent.click(trigger);
        fireEvent.keyDown(document, { key: "Escape" });

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        expect(trigger).toHaveFocus();
    });
});
