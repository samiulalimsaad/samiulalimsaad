import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const INDUSTRY_START = new Date("2021-07-01T00:00:00Z");
const PRODUCTION_START = new Date("2024-02-01T00:00:00Z");

export function getExperienceYears(): number {
    const now = new Date();
    const diffMs = now.getTime() - INDUSTRY_START.getTime();
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(1, Math.floor(years));
}

export function getProductionYears(): number {
    const now = new Date();
    const diffMs = now.getTime() - PRODUCTION_START.getTime();
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(1, Math.floor(years) + 1);
}
