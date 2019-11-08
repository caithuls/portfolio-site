import React from "react";

function Footer() { 
    return (
        <footer className="bg-purple-700">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
                <p className="text-white">
                    Created by {` `}
                    <a className="font-bold no-underline text-white"
                        href="http://www.caitlinhulsey.com">
                        Caitlin Hulsey
                    </a>
                </p>
                <p className="text-white">
                    Built with{` `}
                    <a className="font-bold no-underline text-white"
                        href="https://www.gatsbyjs.org/">
                        GatsbyJS
                    </a>
                </p>
            </nav>
        </footer>
    );
}

export default Footer;