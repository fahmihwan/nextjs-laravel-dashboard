import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                white: "#ffffff",
                ungu: "#B568F1",
                secondary: "#ECECEC",
                secondaryLight: "#F4F4F4",
                secondaryLabel: "#333333",
                success: "#079AA280",
                Tsuccess: "#BED9DA",
                Isuccess: "#068B92",
                info: "#26C0F1",
                TwarningT: "#E8D0C2",
                TdangerT: "#DFC673",
                danger: "#D30000",
                Tprimary: "#C7CCE7",
                primary: "#62BABE",
                warning: "#ED9D6F",
                Iprimary: "#068B92",
                Isecondary: "#858585",
            },
        },
    },
    plugins: [],
};
export default config;
