import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const DISCORD_MENTION_ID = process.env.DISCORD_MENTION_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

export async function POST(req: NextRequest) {
    const { message, email, name } = await req.json(); // Get the message from the form
    const discordMessage = `<@${DISCORD_MENTION_ID}> you got a message from \nname: **${name}** \nemail: **${email}**\nmessage: \`${message}\``;

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

        if (response.status === 200) res = "Message sent to Discord!";
        else res = "Failed to send message to Discord.";
    } catch (error) {
        console.error(error);
        res = "Failed to send message to Discord.";
    }
    return NextResponse.json({ message: res });
}
