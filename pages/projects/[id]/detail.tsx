import axios from "axios";
import Image from "next/image";
import { projectInterface } from "../../../interfaces/Project.interface";

const Detail = ({ project }: { project: projectInterface }) => {
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
                            alt={project?.name}
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

// This function gets called at build time
export async function getStaticPaths() {
    const { data } = await axios.get(
        "https://samiulalimsaad.vercel.app/api/projects"
    );
    const { projects } = data;

    const paths = projects.map((project: projectInterface) => ({
        params: { id: project._id },
    }));
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps(ctx: any) {
    const { data } = await axios.get(
        `https://samiulalimsaad.vercel.app/api/projects/${ctx.params.id}`
    );
    const { projects } = data;
    return {
        props: { project: projects },
        revalidate: 30, // In seconds
    };
}

export default Detail;
