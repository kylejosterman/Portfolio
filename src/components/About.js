import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import background from "../Images/Modern Background 2.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import FadeIn from "react-fade-in";

const builder = imageUrlBuilder(sanityClient);

/**
 * Grabs url from the image to be used to navigate
 *
 * @param source Image source
 * @returns {ImageUrlBuilder}
 */
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
                }`
            )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);
    if (!author) return <div>Loading...</div>;
    return (
        <main className="relative">
            <img
                src={background}
                alt="Background Image"
                className="absolute w-full"
            />
            <FadeIn transitionDuration={600}>
                <div className="p-10 lg:pt-48 container mx-auto relative">
                    <section className="bg-blue-darkest rounded-lg shadow-2xl lg:flex p-20">
                        <img
                            src={urlFor(author.authorImage).url()}
                            alt={author.name}
                            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        />
                        <div className="text-lg flex flex-col justify-center">
                            <h1 className="text-6xl text-blue-lightest mb-4 ">
                                Hey, I'm{" "}
                                <span className="text-green-100">
                                    {author.name}
                                </span>
                            </h1>
                            <div className="prose lg:prose-xl text-white">
                                <BlockContent
                                    blocks={author.bio}
                                    projectId="17r34qqf"
                                    dataset="production"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </FadeIn>
        </main>
    );
}
