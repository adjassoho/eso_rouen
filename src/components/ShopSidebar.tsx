import { ChevronDown } from "lucide-react";

export function ShopSidebar() {
    const categories = [
        "Lithothérapie",
        "Oracles & Tarots",
        "Bougies Artisanales",
        "Sages & Encens",
        "Accessoires",
        "Nouveautés"
    ];

    return (
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
            {/* Categories */}
            <div>
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Catégories</h3>
                <ul className="space-y-2">
                    {categories.map((cat, i) => (
                        <li key={i}>
                            <a href="#" className="font-sans text-foreground/80 hover:text-primary transition-colors block py-1 cursor-pointer">
                                {cat}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Filters */}
            <div>
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Filtres</h3>

                <div className="border-b border-stone-200 py-3">
                    <div className="flex justify-between items-center cursor-pointer group">
                        <span className="font-sans text-foreground/80 group-hover:text-primary">Prix</span>
                        <ChevronDown className="w-4 h-4 text-secondary" />
                    </div>
                </div>

                <div className="border-b border-stone-200 py-3">
                    <div className="flex justify-between items-center cursor-pointer group">
                        <span className="font-sans text-foreground/80 group-hover:text-primary">Type de Pierre</span>
                        <ChevronDown className="w-4 h-4 text-secondary" />
                    </div>
                </div>

                <div className="border-b border-stone-200 py-3">
                    <div className="flex justify-between items-center cursor-pointer group">
                        <span className="font-sans text-foreground/80 group-hover:text-primary">Intention</span>
                        <ChevronDown className="w-4 h-4 text-secondary" />
                    </div>
                </div>
            </div>
        </aside>
    );
}
