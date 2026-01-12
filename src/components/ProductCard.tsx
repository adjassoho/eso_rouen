import Image from "next/image";
import { Button } from "./Button";

interface ProductProps {
    title: string;
    price: string;
    image: string;
}

export function ProductCard({ title, price, image }: ProductProps) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-square w-full mb-4 rounded-md overflow-hidden bg-stone-100">
                <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>

            <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                    {title}
                </h3>
                <p className="font-bold text-lg text-foreground mb-4">{price}</p>

                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Ajouter au panier
                </Button>
            </div>
        </div>
    );
}
