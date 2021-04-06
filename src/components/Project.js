import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"{
                title,
                date,
                description,
                projectType,
                link,
                gitHub,
                tags
            }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-blue-lighter min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-white flex justify-center pb-3">
                    My Projects
                </h1>
                <h2 className="text-lg text-blue-shadowLight flex justify-center mb-12">
                    Current projects I have completed
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData &&
                        projectData.map((project, index) => (
                            <article className="relative rounded-lg shadow-xl bg-white p-16">
                                <h3 className="text-gray-800 text-3xl font-bold mb-2 2xl:group-hover:text-blue-darker">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">
                                            Finished on
                                        </strong>
                                        :{" "}
                                        {new Date(
                                            project.date
                                        ).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">
                                            Company
                                        </strong>
                                        : {project.company}
                                    </span>
                                    <span>
                                        <strong className="font-bold">
                                            Type
                                        </strong>
                                        : {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed"></p>
                                    <a
                                        href={project.link}
                                        rel="noopener norefferrer"
                                        target="_blank"
                                        className="text-blue-darkest font-bold hover:underline hover:text-blue-dark"
                                    >
                                        View The Project{" "}
                                        <span
                                            role="img"
                                            aria-label="right pointer"
                                        >
                                            👉
                                        </span>
                                    </a>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
}
