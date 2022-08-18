const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            xs: '375px',
            sm: '600px',
            md: '768px',
            lg: '992px',
            xl: '1440px',
            '2xl': '1920px',
            '3xl': '2560px'
        },
        textColor: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            ...colors
        },
        backgroundColor: {
            primary: 'var(--background-primary)',
            secondary: 'var(--background-secondary)',
            ...colors
        },
        fontFamily: {
            sans: ['Be Vietnam Pro', 'sans-serif']
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem'
            },
            borderRadius: {
                '4xl': '2rem'
            }
        }
    },
    variants: {},
    plugins: []
};
