"use server";

export type ContactActionState = {
    status: "idle" | "success" | "error";
    message: string | null;
};

export async function sendContact(
    _prevState: ContactActionState,
    formData: FormData
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

    const DISCORD_CHANNEL_ID = process.env.DISCORD_CONTACT_WEBHOOK_URL;
    const DISCORD_MENTION_ID = process.env.NEXT_APP_DISCORD_MENTION_ID;
    const DISCORD_TOKEN = process.env.NEXT_APP_DISCORD_TOKEN;

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

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (DISCORD_TOKEN) {
        headers["Authorization"] = `Bot ${DISCORD_TOKEN}`;
    }

    try {
        const res = await fetch(DISCORD_CHANNEL_ID, {
            method: "POST",
            headers,
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
