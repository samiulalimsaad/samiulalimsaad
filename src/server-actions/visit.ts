"use server";

import { headers } from "next/headers";
import { detectDevice } from "@/components/utils/detectDevice";

export async function trackVisitorVisit(): Promise<{
    success: boolean;
    error?: string;
}> {
    try {
        const DISCORD_CHANNEL = process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL;
        const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
        const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

        if (!DISCORD_CHANNEL) {
            return { success: false, error: "Server is not configured" };
        }

        const hdrs = await headers();
        const ip =
            hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            hdrs.get("x-real-ip") ||
            hdrs.get("cf-connecting-ip") ||
            "unknown";

        const { browser, os, type } = detectDevice(hdrs.get("user-agent") || "");
        const referrer = hdrs.get("referer") || hdrs.get("referrer") || null;
        const language = hdrs.get("accept-language")?.split(",")[0] || null;
        const timezone = hdrs.get("timezone") || null;
        const country = hdrs.get("cf-ipcountry") || null;

        const timestamp = new Date().toISOString();
        const ipLink = `https://whatismyipaddress.com/ip/${ip}`;

        const fields = [
            { name: "OS", value: os || "N/A", inline: true },
            { name: "Browser", value: browser || "N/A", inline: true },
            { name: "Device", value: type, inline: true },
        ];

        if (country || timezone) {
            fields.push({
                name: "Location",
                value: [country, timezone].filter(Boolean).join(" · ") || "N/A",
                inline: true,
            });
        }

        if (language) {
            fields.push({ name: "Language", value: language, inline: true });
        }

        if (referrer) {
            fields.push({ name: "Referrer", value: referrer, inline: false });
        }

        const discordPayload = {
            content: `<@${DISCORD_MENTION_ID}>`,
            embeds: [
                {
                    title: "New Portfolio Visitor",
                    url: ipLink,
                    description: `**IP:** [${ip}](${ipLink})`,
                    color: 0x22c55e,
                    fields,
                    timestamp,
                    footer: {
                        text: "Portfolio Visitor Tracker",
                    },
                },
            ],
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
            return { success: false, error: "Failed to send message" };
        }

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Unexpected server error" };
    }
}
