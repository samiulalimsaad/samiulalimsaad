"use server";

import { headers } from "next/headers";

export type ContactActionState = {
    status: "idle" | "success" | "error" | "rate-limited";
    message: string | null;
};

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 3; // max submissions per window

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return false;
    }

    record.count++;
    return true;
}

export async function sendContact(
    _prevState: ContactActionState,
    formData: FormData,
): Promise<ContactActionState> {
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();

    if (!name || !email || !message) {
        return {
            status: "error",
            message: "Please fill out all fields.",
        };
    }

    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (!checkRateLimit(ip)) {
        return {
            status: "rate-limited",
            message: "Too many submissions. Please wait a few minutes and try again.",
        };
    }

    const DISCORD_CHANNEL_ID = process.env.DISCORD_CONTACT_WEBHOOK_URL;
    const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
    const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

    const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
    });

    if (!DISCORD_CHANNEL_ID) {
        console.error("Discord contact webhook/channel URL is not configured");
        return {
            status: "error",
            message: "Server is not configured to send messages.",
        };
    }

    const content = [
        `<@${DISCORD_MENTION_ID}> you got a message at \`${timestamp}\` from \`${email}\``,
        "\nNew contact form submission:",
        `Name: \`${name}\``,
        `Email: \`${email}\``,
        "Message:",
        message,
    ].join("\n");

    const discordPayload = {
        content,
    };

    const discordHeaders: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (DISCORD_TOKEN) {
        discordHeaders.Authorization = `Bot ${DISCORD_TOKEN}`;
    }

    try {
        const res = await fetch(DISCORD_CHANNEL_ID, {
            method: "POST",
            headers: discordHeaders,
            body: JSON.stringify(discordPayload),
        });

        if (!res.ok) {
            console.error("Discord webhook returned non-OK status", res.status);
            return {
                status: "error",
                message: "Failed to send your message. Please try again.",
            };
        }

        return {
            status: "success",
            message: "Your message has been sent successfully.",
        };
    } catch (error) {
        console.error("Error sending contact message to Discord:", error);
        return {
            status: "error",
            message: "Something went wrong. Please try again.",
        };
    }
}
