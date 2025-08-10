import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import Container from "./ui/components/Container";

const sourceSans = Source_Sans_3({
    variable: 5,
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s - Andrew Hipp - Front End Developer",
        // a default is required when creating a template
        default: "Andrew Hipp - Front End Developer",
    },
    description: "Front End Developer Living in Southern California",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/img/meta/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/img/meta/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/img/meta/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/img/meta/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/img/meta/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/img/meta/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/img/meta/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/img/meta/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/meta/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/img/meta/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/meta/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/img/meta/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/meta/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/img/meta/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={sourceSans.variable}>
                <Header />
                <Container>{children}</Container>
                <Footer />
                <GoogleAnalytics gaId="UA-29489442-1" />
            </body>
        </html>
    );
}
