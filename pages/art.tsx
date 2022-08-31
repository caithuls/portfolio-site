import Gallery from '../components/Gallery';
import { FaPaintBrush } from 'react-icons/fa';

export default function Art() {
    return (
        <div className="container pt-4 mx-auto max-w-4xl text-lg text-center">
            <div className="align-middle p-2 whitespace-nowrap">
                You can buy prints of my art &thinsp;
                <a
                    href="https://www.inprnt.com/gallery/caithuls/"
                    className={"transition-colors rounded bg-emerald-200 text-black hover:text-violet-400 flex inline-flex"}
                    target="_blank"
                    rel="noreferrer"
                    title="Art Prints"
                >
                &nbsp;here&thinsp;<FaPaintBrush className="mt-1"/> &nbsp;
                </a>
            </div>
            <Gallery/>
        </div>
    );
}