'use client';
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>XBeat</title>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
