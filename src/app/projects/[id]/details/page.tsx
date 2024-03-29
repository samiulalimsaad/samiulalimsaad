import Image from "next/image";
import {
    getProjects,
    getSingleProject,
} from "../../../../backend/services/project.service";
import { projectInterface } from "../../../../interfaces/Project.interface";

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects?.map((project: projectInterface) => ({
        slug: project._id,
    }));
}

async function getStaticData(id: string) {
    const project = await getSingleProject(id);
    return project;
}

const DetailsPage = async ({ params }: { params: { id: string } }) => {
    const project = await getStaticData(params.id);

    return (
        <div
            // style={{ "var(--image-url)": project?.image }}
            className="hero min-h-screen bg-[url('/projects.png')] bg-fixed"
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="items-center justify-center py-10 text-center hero-content text-neutral-content">
                <div className="space-y-8">
                    <figure>
                        <Image
                            className="rounded-md"
                            src={project?.image || "/projects.png"}
                            alt={project?.name!}
                            width={1200}
                            height={600}
                        />
                    </figure>
                    <h1 className="mb-5 text-5xl font-bold">{project?.name}</h1>
                    <p className="mb-5">{project?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
