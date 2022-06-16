import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { projectInterface } from "../../../backend/interfaces/Project.interface";

const Detail = () => {
    const router = useRouter();

    const [project, setProject] = useState<projectInterface>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`/api/projects/${router.query.id}`).then(({ data }) => {
            setProject(data.projects);
            setIsLoading(false);
        });
    }, [router.query.id]);

    if (isLoading) return "loading...";

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

export default Detail;
