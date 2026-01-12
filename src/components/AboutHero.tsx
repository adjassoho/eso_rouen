import Image from "next/image";

export function AboutHero() {
    return (
        <section className="py-24 bg-[#FDFAF5] relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
            {/* Background Organic Shapes */}
            <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-[#E8D4CB] rounded-bl-[150px] -z-10 opacity-70" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-[#C07A5F] rounded-tr-[150px] -z-10 opacity-90" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left: Portrait with Custom SVG Shape */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-[380px] h-[450px] md:w-[480px] md:h-[550px]">

                        {/* 
                            SVG-based Image Masking 
                            This approach ensures the image fills the shape exactly and the border matches perfectly.
                        */}
                        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-xl">
                            <defs>
                                {/* 
                                   A refined path closer to the "potato" shape in the mockup:
                                   Irregular oval, slightly wavy. 
                                */}
                                <path id="organic-blob" d="M100,5 C130,5, 155,15, 170,40 C185,65, 195,90, 190,120 C185,150, 170,180, 140,200 C110,220, 70,215, 40,195 C10,175, 0,140, 5,100 C10,60, 30,25, 60,10 C75,2.5, 90,5, 100,5 Z" />

                                <clipPath id="blob-clip">
                                    <use href="#organic-blob" />
                                </clipPath>
                            </defs>

                            {/* The Image masked by the blob */}
                            {/* 
                                Using SVG <image> tag. 
                                preserveAspectRatio="xMidYMid slice" makes it behave like object-cover.
                            */}
                            <image
                                href="/portrait.png"
                                width="200"
                                height="220"
                                clipPath="url(#blob-clip)"
                                preserveAspectRatio="xMidYMid slice"
                            />

                            {/* The Double Border Overlay */}
                            {/* Inner Line */}
                            <use href="#organic-blob" fill="none" stroke="#594A42" strokeWidth="1" opacity="0.8" />

                            {/* Outer Offset Line - simulating the sketch effect */}
                            <path d="M100,2 C132,2, 158,12, 174,38 C189,64, 199,90, 194,122 C189,154, 174,184, 142,204 C111,224, 69,219, 38,198 C8,177, -2,141, 3,99 C8,58, 29,22, 61,7 C77,-0.5, 90,2, 100,2 Z"
                                fill="none"
                                stroke="#594A42"
                                strokeWidth="2.5"
                                opacity="1"
                                transform="translate(-1, -1)"
                            />
                        </svg>

                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col space-y-12">
                    {/* Parcours */}
                    <div>
                        <h1 className="font-serif text-5xl lg:text-6xl text-[#1A1A1A] mb-6 leading-[1.1]">
                            Mon Parcours - <br />
                            <span className="font-light">La Voie de l&apos;Éveil</span>
                        </h1>
                        <p className="font-sans text-[#4A4A4A] leading-relaxed text-base font-medium max-w-lg">
                            Originaire de Rouen, mon voyage spirituel a commencé par une soif de comprendre les connexions profondes de l&apos;univers. Après des années d&apos;études et de pratiques personnelles, j&apos;ai embrassé ma vocation pour guider les autres vers l&apos;harmonie et la découverte de soi.
                        </p>
                    </div>

                    {/* Valeurs */}
                    <div>
                        <h2 className="font-serif text-5xl lg:text-6xl text-[#1A1A1A] mb-6 leading-[1.1]">
                            Mes Valeurs - Éthique & <br />
                            Bienveillance
                        </h2>
                        <p className="font-sans text-[#4A4A4A] leading-relaxed text-base font-medium max-w-lg">
                            Mon approche est ancrée dans le respect, l&apos;intégrité et une profonde bienveillance. Chaque échange est une invitation à la confiance, où votre sécurité émotionnelle et votre autonomie sont mes priorités absolues. Je crois en un accompagnement authentique et transparent.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
