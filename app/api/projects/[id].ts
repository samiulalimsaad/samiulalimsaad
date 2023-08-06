import { NextResponse } from "next/server";
import connectDB from "../../../backend/Database";
import { ProjectModal } from "../../../backend/Models/Projects.model";

export async function GET(req: Request) {
    connectDB();
    const { searchParams } = new URL(req.url);
    const projects = await ProjectModal.findById(searchParams.get("id")).sort({
        priority: -1,
    });
    return NextResponse.json({ projects });
}
