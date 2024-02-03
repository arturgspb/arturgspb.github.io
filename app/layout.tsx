import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const InterFont = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const KanitFont = Kanit({
    weight: "800",
    subsets: ["latin"],
    variable: '--font-kanit',
});


export const metadata: Metadata = {
    title: "Артур Геращенко",
    description: "Личный сайт",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={InterFont.className + ' text-black bg-site'}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
