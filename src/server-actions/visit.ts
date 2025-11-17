"use server";

import { detectDevice } from "@/components/utils/detectDevice";
import { headers } from "next/headers";

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
export async function trackVisitorVisit(): Promise<{
    success: boolean;
    error?: string;
    location?: LocationData | null;
    ip?: string;
}> {
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

        const hdrs = await headers(); // Await the headers

        const ip = hdrs.get("x-forwarded-for") || hdrs.get("x-real-ip");

        const { browser, os, type } = detectDevice(
            hdrs.get("user-agent") || ""
        );

        const content = [
            `<@${DISCORD_MENTION_ID}> a person landed on the site at ${timestamp}`,
            `detected IP: \`${ip}\``,
            `user IP: \`${hdrs.get("x-forwarded-for")}\``,
            `user IP: \`${hdrs.get("x-real-ip")}\``,
            `user IP: \`${hdrs.get("cf-connecting-ip")}\``,
            `user IP: \`${hdrs.get("true-client-ip")}\``,
            `user IP: \`${hdrs.get("cf-ipcountry")}\``,
            `user agent: \`${hdrs.get("user-agent")}\``,
            `user os: \`${os}\``,
            `user browser: \`${browser}\``,
            `user device: \`${type}\`,`,
            `referrer: \`${hdrs.get("referrer")}\``,
            `user language: \`${hdrs.get("accept-language")}\``,
            `user timezone: \`${hdrs.get("timezone")}\``,
            `user country: \`${hdrs.get("country")}\``,
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
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: "Unexpected server error",
        };
    }
}
