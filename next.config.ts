import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net", // Contentful's image CDN hostname
                port: "", // Leave empty unless a specific port is used
                pathname: "/**", // Allows any path under the hostname
            },
            {
                protocol: "https",
                hostname: "downloads.ctfassets.net", // Contentful's image CDN hostname
                port: "", // Leave empty unless a specific port is used
                pathname: "/**", // Allows any path under the hostname
            },
        ],
    },
};

export default nextConfig;
