import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    files: [
    "../pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "../components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "../app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
},
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
