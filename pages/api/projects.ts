import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../backend/Database";
import { ProjectModal } from "../../backend/Models/Projects.model";

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).get(async (req, res) => {
    try {
        const projects = await ProjectModal.find({});
        res.json({ projects });
    } catch (error) {
        res.send(error);
    }
});

export default connectDB(handler);
