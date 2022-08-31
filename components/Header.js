import Link from "next/link"
import React from "react"

const Header = () => {
    return (
        <div className="top-0 p-5 bg-gradient-to-r from-indigo-700 ">
            <div className="container mx-auto lg:max-w-4xl flex justify-center space-x-4 text-white">
                <Link href="/">
                    <a className="text-lg font-normal transition-colors hover:text-emerald-200 active:underline">
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className="text-lg font-normal transition-colors hover:text-emerald-200 active:underline">
                        About
                    </a>
                </Link>
                <Link href="/art">
                    <a className="text-lg font-normal transition-colors hover:text-emerald-200 active:underline">
                        Art
                    </a>
                </Link>
            </div>  
        </div>
    )
}

export default Header;