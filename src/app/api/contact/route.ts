import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body ?? {};

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const DISCORD_CHANNEL_ID = process.env.DISCORD_CONTACT_WEBHOOK_URL;
        const DISCORD_MENTION_ID = process.env.NEXT_APP_DISCORD_MENTION_ID;
        const DISCORD_TOKEN = process.env.NEXT_APP_DISCORD_TOKEN;

        const timestamp = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
        });

        if (!DISCORD_CHANNEL_ID) {
            return NextResponse.json(
                { success: false, error: "Server is not configured" },
                { status: 500 }
            );
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

        const res = await fetch(DISCORD_CHANNEL_ID, {
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
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { success: false, error: "Unexpected server error" },
            { status: 500 }
        );
    }
}
