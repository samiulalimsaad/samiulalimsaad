import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const res = await fetch(
        "http://ip-api.com/json?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
    );
    const data = await res.json();
    // Destructure the variables
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

    // Create a dynamic Discord message
    const discordMessage = `
        <@${DISCORD_MENTION_ID}> one person jus landed on the site
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
    `;

    const response = await fetch(DISCORD_CHANNEL_ID!, {
        method: "POST",
        body: JSON.stringify({ content: discordMessage }),
        headers: {
            Authorization: `Bot ${DISCORD_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    return NextResponse.next();
    // .redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/",
};
