import Image from "next/image";

export function InstagramFeed() {
    // Placeholders for instagram images
    // In a real app, these would come from an API or be static assets
    const images = [
        "/eso1.png",
        "/eso2.png",
        "/eso3.png",
        "/eso4.png",
        "/eso5.png",
        "/eso6.png"
    ];

    return (
        <section className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 w-full">
                {images.map((img, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden font-sans group">
                        <Image src={img} alt={`Instagram post ${index + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 text-white">
                            <span className="font-medium">Voir le post</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
