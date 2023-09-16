"use server";

let visitor = "";

const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID2 = process.env.DISCORD_CHANNEL_ID2;

export async function visitorCount(data: any = {}) {
    const {
        city,
        country,
        regionName,
        continent,
        isp,
        mobile,
        proxy,
        hosting,
    } = data || {};

    const discordMessage = `
        <@${DISCORD_MENTION_ID}> one person just landed on the site
        **Location**: ${city}, ${country}
        **Description**: You are currently in **${city}**, situated in the **${regionName}** of **${continent}**. Your internet service provider is **${isp}**. This is a **${
        mobile ? "mobile" : "non-mobile"
    }** connection, and **${
        proxy
            ? "there is a proxy"
            : hosting
            ? "there is hosting"
            : "there is no proxy or hosting"
    }** detected.
    
    **Additional Information**:
    - **Continent**: ${JSON.stringify(continent, null, 4)}
    - **All**: ${JSON.stringify(data, null, 4)}
    `;

    if (visitor !== JSON.stringify(discordMessage)) {
        visitor = JSON.stringify(discordMessage);
        await fetch(DISCORD_CHANNEL_ID2!, {
            method: "POST",
            body: JSON.stringify({ content: discordMessage }),
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`,
                "Content-Type": "application/json",
            },
        });
    }
}
