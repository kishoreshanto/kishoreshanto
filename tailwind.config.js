/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 0.7s ease-in', global_search_fadeIn: 'fadeIn 0.3s ease-in',
            }, keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'}, '100%': {opacity: '1'},
                }, global_search_fadeIn: {
                    '0%': {opacity: '0'}, '100%': {opacity: '1'},
                },
            }, fontFamily: {

                'sans': ['-apple-system', 'BlinkMacSystemFont', "Inter", 'Helvetica Neue', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
                'mono': ['SFMono-Regular', 'JetBrains Mono',],
            }
        },
        screens: {
            'xs': '420px',
            // => @media (min-width: 420px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    }, plugins: [],
};