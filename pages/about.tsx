import Image from "next/image"
import caitlin from "/public/caitlin.png";

export default function About() {
    return (
        <div className="container px-8 mx-auto max-w-4xl">
            <div className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 flex flex-col-reverse text-center">
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-4">
                    <Image
                        src={caitlin}
                        alt="Picture of Caitlin"
                        priority={true}
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
                <div className="p-4 m-4">
                    <div className="mt-6 text-gray-800 text-xl text-center lg:text-left">
                        <p>
                        Caitlin Hulsey is a visual artist, computer programmer, and comedy writer from South Carolina. 
                        She uses acrylic paint, markers, pens, and bold strokes to create textured, detailed art pieces. 
                        Caitlin has a B.S. in Computer Science and experience with software and web development.
                        Caitlin is passionate about comedy, technology, and mostly importantly, TV. 
                        She also writes jokes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}