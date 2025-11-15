import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

// Type definition for location data
interface LocationData {
    ip: string;
    hostname: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
    anycast: boolean;
}

// Server Action - No HTTP response, just return data
export async function trackVisitorVisit(
    headersPromise: Promise<ReadonlyHeaders>
): Promise<{
    success: boolean;
    error?: string;
    location?: LocationData | null;
    ip?: string;
}> {
    "use server";

    try {
        const DISCORD_CHANNEL = process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL;
        const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
        const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

        const timestamp = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
        });

        if (!DISCORD_CHANNEL) {
            return {
                success: false,
                error: "Server is not configured",
            };
        }

        const headers = await headersPromise; // Await the headers
        const ip = getIP(headers);
        const locationData: LocationData | null = await getLocationByIP(ip);

        const content = [
            `<@${DISCORD_MENTION_ID}> a person landed on the site at ${timestamp}`,
            `Location: ${locationData?.city || "Unknown"}, ${
                locationData?.country || "Unknown"
            }`,
            `detected IP: \`${ip}\``,
            JSON.stringify(locationData, null, 2),
        ].join("\n");

        const discordPayload = {
            content,
        };

        const res = await fetch(DISCORD_CHANNEL, {
            method: "POST",
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(discordPayload),
        });

        if (!res.ok) {
            return {
                success: false,
                error: "Failed to send message",
            };
        }

        return {
            success: true,
            location: locationData,
            ip: ip,
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: "Unexpected server error",
        };
    }
}

// Helper function to get client IP from headers
function getIP(headers: Headers | ReadonlyHeaders): string {
    const forwarded = headers.get("x-forwarded-for");
    const realIP = headers.get("x-real-ip");
    const cfConnectingIP = headers.get("cf-connecting-ip");

    return (
        forwarded?.split(",")[0]?.trim() ||
        realIP?.trim() ||
        cfConnectingIP?.trim() ||
        "127.0.0.1"
    );
}

// Helper function to get location by IP
async function getLocationByIP(ip: string): Promise<LocationData | null> {
    try {
        // Using ipapi.co free service
        const response = await fetch(`https://ipapi.io/${ip}/json/`);
        if (!response.ok) throw new Error("Location API failed");

        const data = await response.json();
        return {
            ip: data.ip || ip,
            hostname: data.hostname || "unknown",
            city: data.city || "unknown",
            region: data.region || "unknown",
            country: data.country || "unknown",
            loc: data.loc || "unknown",
            org: data.org || "unknown",
            postal: data.postal || "unknown",
            timezone: data.timezone || "unknown",
            readme: data.readme || "unknown",
            anycast: data.anycast || "unknown",
        };
    } catch (error) {
        console.error("Location fetch error:", error);
        return null;
    }
}
