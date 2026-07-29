"use server";

import { cookies } from "next/headers";

export type ContactActionState = {
    status: "idle" | "success" | "error" | "rate-limited";
    message: string | null;
};

const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 3; // max submissions per window

// Cookie-based rate limiting persists across serverless cold starts.
// Timestamps stored in HTTP-only cookie to prevent client tampering.
async function checkRateLimit(): Promise<boolean> {
    const cookieStore = await cookies();
    const key = "contact-ts";
    const raw = cookieStore.get(key)?.value;

    const now = Date.now();
    const timestamps: number[] = raw ? JSON.parse(raw) : [];

    // Remove expired timestamps outside the 5-minute window
    const recent = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW);

    if (recent.length >= RATE_LIMIT_MAX) {
        return false;
    }

    recent.push(now);
    cookieStore.set(key, JSON.stringify(recent), {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: RATE_LIMIT_WINDOW / 1000,
    });

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

    if (!(await checkRateLimit())) {
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
