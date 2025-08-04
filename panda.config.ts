import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    marketing: { value: "Source Sans Pro" },
                },
                colors: {
                    green: { value: "#69cd00" },
                    red: { value: "#e43700" },
                    purple: { value: "#870295" },
                    body: { value: "#303933" },
                },
                gradients: {
                    simple: {
                        value: "linear-gradient(60deg, var(--colors-green) 33%, var(--colors-red) 60%, var(--colors-purple) 100%)",
                    },
                },
            },
            breakpoints: {
                xs: "480px",
                sm: "768px",
                md: "1024px",
                lg: "1200px",
                xl: "1500px",
            },
        },
    },

    utilities: {
        extend: {
            clamp: {
                className: 'clamp',
                values: 'string',
                transform(value) {
                    const [min, max] = value.split(' ');
                    const vw = Number(max.replace('px', '')) / 1500 * 100 + 'vw';

                    return {
                        fontSize: `clamp(${min}, ${vw}, ${max})`
                    }
                }
            }
        }
    },

    // The output directory for your css system
    outdir: "styled-system",
});
