export function parseUserAgent(userAgent: string) {
    // Define mappings for common user-agent strings to OS names
    const osMap = {
        Windows: "Windows",
        Macintosh: "macOS",
        iPhone: "iOS",
        iPad: "iOS",
        Android: "Android",
        Linux: "Linux",
    };

    for (const osName in osMap) {
        if (userAgent.includes(osName)) {
            return { os: osMap[osName as keyof typeof osMap] };
        }
    }

    // If no OS match is found, return an unknown value
    return { os: "Unknown" };
}
