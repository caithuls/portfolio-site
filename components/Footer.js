import React from "react";
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { FaPaintBrush } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bottom-0 p-5 mt-5 bg-gradient-to-l from-emerald-600">
            <div className="max-w-4xl max-h-8 mx-auto text-white">
                <div className="flex flex-col justify-center lg:flex-row items-center align-middle">
                    <div className="flex flex-wrap pt-0 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="mailto:caithuls8@gmail.com"
                            className={"transition-colors hover:text-violet-400"}
                            target="_blank"
                            rel="noreferrer"
                            title="Email"
                        >
                            <MdEmail size="28"/>
                        </a>
                        <a
                            href="https://www.inprnt.com/gallery/caithuls/"
                            className={"transition-colors hover:text-violet-400"}
                            target="_blank"
                            rel="noreferrer"
                            title="Art Prints"
                        >
                            <FaPaintBrush size="28"/>
                        </a>
                        <a
                            href="https://twitter.com/caithuls"
                            className={"transition-colors hover:text-violet-400"}
                            target="_blank"
                            rel="noreferrer"
                            title="Twitter"
                        >
                            <FaTwitter size="28"/>
                        </a>
                        <a
                            href="https://instagram.com/caithuls"
                            className={"transition-colors hover:text-violet-400"}
                            target="_blank"
                            rel="noreferrer"
                            title="Instagram"
                        >
                            <AiFillInstagram size="28"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;