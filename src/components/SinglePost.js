import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

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

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null); // Set initial state to null
    const { slug } = useParams(); // Pulls the slug

    useEffect(() => {
        // Groq query for slug
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }
        `
            )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]); // Only a single slug

    // Add animation
    if (!singlePost) return <div>Loading...</div>;

    return (
        <main className="bg-blue-lighter min-h-screen p-12">
            <article className="container bg-gray-50 rounded-lg shadow-lg mx-auto">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <p className="flex items-center pl-2 text-2xl">
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId="17r34qqf"
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    );
}
