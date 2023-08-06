import { NextResponse } from "next/server";
import connectDB from "../../../backend/Database";
import { ProjectModal } from "../../../backend/Models/Projects.model";

export async function GET(request: Request) {
    connectDB();
    const projects = await ProjectModal.find({}).sort({ priority: -1 });
    return NextResponse.json({ projects });
}
