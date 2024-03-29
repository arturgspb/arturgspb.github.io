import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetrikaScript } from "../components/analytics/metrika";
// import { Header } from "../components/Header";

const InterFont = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Артур Геращенко",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={InterFont.className + ' text-black bg-site'}>
        <div className={'p-4'}>&nbsp;</div>
        {/*<Header/>*/}
        {children}
        <MetrikaScript />
        </body>
        </html>
    );
}
