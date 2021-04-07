import React from "react";
import image from "../Images/Modern Background.jpg";
import FadeIn from "react-fade-in";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Chicago"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <div>
                    <FadeIn transitionDuration={800}>
                        <h1 className="text-6xl text-white leading-none lg:leading-snug home-name pb-4">
                            Hi, I'm Kyle.
                        </h1>
                        <h2 className="text-3xl text-white leading-none lg:leading-snug home-name">
                            Student, Programmer, Problem Solver
                        </h2>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
