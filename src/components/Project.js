import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import FadeIn from "react-fade-in";

/**
 * Get state through a hook from Sanity. state -> use state -> set state. Used for each project
 * @constructor Def
 */
export default function Project() {
    const [projectData, setProjectData] = useState(null); // Set initial state to null
    // Groq query
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
                    title,
                    date,
                    description,
                    projectType,
                    link,
                    gitHub,
                    tags,
                    company
                }`
            )
            .then((data) => setProjectData(data)) // Data pulled will set the state
            .catch(console.error);
    }, []); // [] to run once
    return (
        <main className="bg-blue-lighter min-h-screen p-12">
            <section className="container mx-auto">
                <FadeIn transitionDuration={800}>
                    <h1 className="text-5xl text-white flex justify-center pb-3">
                        My Projects
                    </h1>
                    <h2 className="text-lg text-white flex justify-center mb-12">
                        Current projects I have completed
                    </h2>
                    <section className="grid grid-cols-2 gap-8">
                        {projectData &&
                            projectData.map((project, index) => (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <article className="relative rounded-lg shadow-xl bg-white p-16 hover:bg-gray-50 hover:shadow-2xl">
                                        <h3 className="text-gray-800 text-3xl font-bold mb-2">
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
                                                    Finished On
                                                </strong>
                                                :{" "}
                                                {new Date(
                                                    project.date
                                                ).toLocaleDateString()}
                                            </span>
                                            <span>
                                                <strong className="font-bold">
                                                    Type
                                                </strong>
                                                :{" "}
                                                {project.projectType
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    project.projectType.slice(
                                                        1
                                                    )}
                                            </span>
                                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <a
                                                href={project.link}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="text-blue-dark font-bold hover:text-blue-darker text-lg"
                                            >
                                                <span
                                                    role="img"
                                                    aria-label="right pointer"
                                                >
                                                    👉
                                                </span>{" "}
                                                View The Project
                                            </a>
                                        </div>
                                    </article>
                                </a>
                            ))}
                    </section>
                </FadeIn>
            </section>
        </main>
    );
}
