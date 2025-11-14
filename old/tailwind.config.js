module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["night"],
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
