import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getLocation } from "../../../components/utils/getLocation";
import { parseUserAgent } from "../../../components/utils/parseUserAgent";

const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

export async function POST(req: NextRequest) {
    const { message, email, name } = await req.json(); // Get the message from the form
    const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
    });
    const ip = req.ip;
    const userAgent = req.headers.get("user-agent");
    const osInfo = parseUserAgent(userAgent!);
    const location = await getLocation(ip!);

    // const  location = new

    const meta = {
        ip,
        osInfo,
        location,
    };

    const discordMessage = `
    ###     meta data   ###
    --------------------------------
    ${JSON.stringify(meta, null, 4)}
    --------------------------------
    <@${DISCORD_MENTION_ID}> you got a message at \`${timestamp}\` from
    name: **${name}**
    email: **${email}**
    message: \`${message}\``;

    let res;

    try {
        const response = await axios.post(
            DISCORD_CHANNEL_ID!,
            { content: discordMessage },
            {
                headers: {
                    Authorization: `Bot ${DISCORD_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200)
            res = { message: "Message sent to Discord!", success: true };
        else
            res = {
                message: "Failed to send message to Discord.",
                success: false,
            };
    } catch (error) {
        console.error(error);
        res = { message: "Failed to send message to Discord.", success: false };
    }
    return NextResponse.json(res);
}
