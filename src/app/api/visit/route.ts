import { NextResponse } from "next/server";

// Type definition for location data
interface LocationData {
    ip: string;
    city: string;
    region: string;
    country: string;
    latitude: number | null;
    longitude: number | null;
    timezone: string;
    isp: string;
}

export async function POST(request: Request) {
    try {
        const DISCORD_CHANNEL = process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL;
        const DISCORD_MENTION_ID = process.env.NEXT_APP_DISCORD_MENTION_ID;
        const DISCORD_TOKEN = process.env.NEXT_APP_DISCORD_TOKEN;

        const timestamp = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
        });

        if (!DISCORD_CHANNEL) {
            return NextResponse.json(
                { success: false, error: "Server is not configured" },
                { status: 500 }
            );
        }

        const ip = getIP(request);
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
            return NextResponse.json(
                { success: false, error: "Failed to send message" },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "Unexpected server error" },
            { status: 500 }
        );
    }
}

// Helper function to get client IP
function getIP(request: Request) {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIP = request.headers.get("x-real-ip");
    const cfConnectingIP = request.headers.get("cf-connecting-ip");

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
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!response.ok) throw new Error("Location API failed");

        const data = await response.json();
        return {
            ip: data.ip || ip,
            city: data.city || "Unknown",
            region: data.region || "Unknown",
            country: data.country_name || "Unknown",
            latitude: data.latitude || null,
            longitude: data.longitude || null,
            timezone: data.timezone || "Unknown",
            isp: data.org || "Unknown",
        };
    } catch (error) {
        console.error("Location fetch error:", error);
        return null;
    }
}
