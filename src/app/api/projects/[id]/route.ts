import { NextResponse } from "next/server";
import connectDB from "../../../../backend/Database";
import { getSingleProject } from "../../../../backend/services/project.service";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    connectDB();

    const project = await getSingleProject(params.id);
    return NextResponse.json({ project });
}
