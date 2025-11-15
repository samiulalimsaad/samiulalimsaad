import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const EXPERIENCE_START = new Date("2022-02-01T00:00:00Z");

export function getExperienceYears(from: Date = EXPERIENCE_START): number {
    const now = new Date();
    const diffMs = now.getTime() - from.getTime();
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(1, Math.floor(years));
}
