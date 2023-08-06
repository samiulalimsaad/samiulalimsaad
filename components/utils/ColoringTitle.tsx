import { ReactNode, useMemo } from "react";

interface coloringTitleProps {
    children: ReactNode;
    as: keyof HTMLElementTagNameMap;
    classes?: string;
    justify?: "center" | "start" | "end";
    fontSize?:
        | "xs"
        | "sm"
        | "base"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "7xl"
        | "8xl"
        | "9xl";
}

const ColoringTitle = ({
    children,
    as = "h2",
    classes = "",
    justify = "center",
    fontSize = "xl",
}: coloringTitleProps) => {
    const horizontalAlignment = useMemo(() => {
        switch (justify) {
            case "center":
                return "justify-center";
            case "start":
                return "justify-start";
            case "end":
                return "justify-end";
            default:
                return "justify-start";
        }
    }, [justify]);

    const fortSize = useMemo(() => {
        switch (fontSize) {
            case "xs":
                return "text-xs sm:text-sm";
            case "sm":
                return "text-sm sm:text-base";
            case "base":
                return "text-base sm:text-lg";
            case "lg":
                return "text-lg sm:text-xl";
            case "xl":
                return "text-xl sm:text-2xl";
            case "2xl":
                return "text-2xl sm:text-3xl";
            case "3xl":
                return "text-3xl sm:text-4xl";
            case "4xl":
                return "text-4xl sm:text-5xl";
            case "5xl":
                return "text-5xl sm:text-6xl";
            case "6xl":
                return "text-6xl sm:text-7xl";
            case "7xl":
                return "text-7xl sm:text-8xl";
            case "8xl":
                return "text-8xl sm:text-9xl";
            case "9xl":
                return "text-9xl";
            default:
                return "text-2xl sm:text-3xl";
        }
    }, [fontSize]);

    const Tag = as;
    return (
        <Tag
            className={`flex py-4 items-center w-full !text-transparent capitalize bg-clip-text bg-gradient-to-r from-accent to-secondary hover:to-accent hover:from-secondary duration-500 drop-shadow-md drop-shadow-success/50 font-semibold ${horizontalAlignment} ${fortSize} ${classes}`}
        >
            {children}
        </Tag>
    );
};

export default ColoringTitle;
