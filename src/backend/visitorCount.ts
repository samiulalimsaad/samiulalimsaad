"use server";

const DISCORD_MENTION_ID = process.env.NEXT_APP_DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.NEXT_APP_DISCORD_TOKEN;
const DISCORD_CHANNEL_ID2 = process.env.NEXT_APP_DISCORD_CHANNEL_ID2;

export async function visitorCount(data: any = {}) {
    const date = new Date();
    const now = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "Asia/Dhaka",
    });

    const discordMessage = `<@${DISCORD_MENTION_ID}> a person landed on the site at ${now}`;

    fetch(DISCORD_CHANNEL_ID2!, {
        method: "POST",
        body: JSON.stringify({ content: discordMessage }),
        headers: {
            Authorization: `Bot ${DISCORD_TOKEN}`,
            "Content-Type": "application/json",
        },
    });
}
