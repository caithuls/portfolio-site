import Card from "../components/Card";

export default function Gallery() {
    const json = require('/public/art.json');
    const images = Array.from(json);

    return (
        <div className="container px-5 mt-5 mb-5 mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-2 lg:grid-cols-3 sm:grid-cols-2">
                {images.map(image => <Card key={image.id} image={image} />)} 
            </div>
        </div>
    )
}