import React from "react";
import image from "../Images/Modern Background.jpg";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Chicago"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white leading-none lg:leading-snug home-name">
                    Hi. I'm Kyle Osterman.
                </h1>
            </section>
        </main>
    );
}
