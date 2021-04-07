import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import FadeIn from "react-fade-in";

/**
 * Get state through a hook from Sanity. state -> use state -> set state. Used for each blog post
 * @constructor Def
 */
export default function Post() {
    const [postData, setPost] = useState(null); // Set initial state to null
    // Groq query
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setPost(data)) // Data pulled will set the state
            .catch(console.error);
    }, []); // [] to run once
    return (
        <main className="bg-blue-lighter min-h-screen p-12">
            <sction className="container mx-auto">
                <FadeIn transitionDuration={800}>
                    <h1 className="text-5xl text-white flex justify-center pb-3">
                        Blog Posts
                    </h1>
                    <h2 className="text-lg text-blue-shadowLight flex justify-center mb-12">
                        Weekly blog posts page
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Grid of tiles of all posts. Grid column of 1 for small screen, 2 for medium, 3 for large */}
                        {/* Show all data */}
                        {postData &&
                            postData.map((post, index) => (
                                <article>
                                    {/* Clickable */}
                                    <Link
                                        to={"/post/" + post.slug.current}
                                        key={post.slug.current}
                                    >
                                        {/* Link to blog post with key index */}
                                        <span
                                            className="block h-64 relative rounded shadow-xl leading-snug bg-gray-300 border-l-8 border-blue-dark hover:bg-gray-50 hover:shadow-2xl"
                                            key={index}
                                        >
                                            <img
                                                src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt}
                                                className="w-full h-full rounded-r object-cover absolute"
                                            />
                                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4 pl-4">
                                                <h3 className="text-lg font-blog px-3 py-4 bg-blue-darkest text-white bg-opacity-75 rounded">
                                                    {post.title}
                                                </h3>
                                            </span>
                                        </span>
                                    </Link>
                                </article>
                            ))}
                    </div>
                </FadeIn>
            </sction>
        </main>
    );
}
