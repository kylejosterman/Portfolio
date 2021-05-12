import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-light">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-blue-lightest" // On the page
                        className="inline-flex items-center py-6 px-3 mr-5 text-white hover:text-blue-darkest text-4xl tracking-widest"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-blue-darkest"
                        activeClassName="text-blue-lightest"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-blue-darkest"
                        activeClassName="text-blue-lightest"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 mr-6 text-white hover:text-blue-darkest"
                        activeClassName="text-blue-lightest"
                    >
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.twitter.com/kylejosterman"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.github.com/kylejosterman"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/kyle-osterman"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
}
