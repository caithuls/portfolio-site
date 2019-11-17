import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Footer() { 
    return (
        <footer className="bg-indigo-700">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-white text-xl">
                <div class="flex content-around flex-wrap">
                    <div class="w-1/3 p-2">
                        <a href="mailto:caithuls8@gmail.com">
                            <MdEmail />
                        </a>
                    </div>
                    <div class="w-1/3 p-2">
                        <a href="https://twitter.com/caithuls">
                            <FaTwitter />
                        </a>
                    </div>
                    <div class="w-1/3 p-2">
                        <a href="https://instagram.com/caithuls">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <p className="text-white text-sm">
                    Built by {' '}
                    <a className="font-bold no-underline text-white"
                        href="https://www.caitlinhulsey.com/">
                        Caitlin Hulsey 
                    </a>
                    &nbsp;using {` `}
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