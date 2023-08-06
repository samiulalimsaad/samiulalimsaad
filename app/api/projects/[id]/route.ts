import { NextResponse } from "next/server";
import connectDB from "../../../../backend/Database";
import { ProjectModal } from "../../../../backend/Models/Projects.model";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    connectDB();

    const projects = await ProjectModal.findById(params.id).sort({
        priority: -1,
    });
    return NextResponse.json({ projects });
}
