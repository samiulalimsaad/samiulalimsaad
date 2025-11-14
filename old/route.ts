import { NextResponse } from "next/server";
import { getProjects } from "../../../backend/services/project.service";

export async function GET(request: Request) {
    const projects = await getProjects();
    return NextResponse.json({ projects });
}
