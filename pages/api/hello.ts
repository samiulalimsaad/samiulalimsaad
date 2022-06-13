import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../backend/Database";

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .get((req, res) => {
        res.send("Hello world");
    })
    .post((req, res) => {
        res.json({ hello: "world" });
    })
    .put(async (req, res) => {
        res.end("async/await is also supported!");
    })
    .patch(async (req, res) => {
        throw new Error("Throws me around! Error can be caught and handled.");
    });

export default connectDB(handler);
