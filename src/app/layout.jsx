import localFont from "next/font/local";
import "./globals.css";
import {BackHome} from "@/app/components/back-home";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "useImperativeHandle examples",
    description: "These examples for useImperativeHandle topic on hackernoon web site",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BackHome/>
        {children}
        </body>
        </html>
    );
}
