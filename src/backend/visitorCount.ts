const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID2 = process.env.DISCORD_CHANNEL_ID2;

export async function visitorCount(data: any = {}) {
    const discordMessage = `<@${DISCORD_MENTION_ID}> a person landed on the site`;

    await fetch(DISCORD_CHANNEL_ID2!, {
        method: "POST",
        body: JSON.stringify({ content: discordMessage }),
        headers: {
            Authorization: `Bot ${DISCORD_TOKEN}`,
            "Content-Type": "application/json",
        },
    });
}
