import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Changed fonts
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Révélez votre potentiel - Praticienne ésotérique",
  description: "Guidance, soins énergétiques et boutique ésotérique à Rouen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
