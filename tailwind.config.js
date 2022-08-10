/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            xs: '375px',
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1536px',
        },
        extend: {}
    },
    variants: {},
    plugins: []
};
