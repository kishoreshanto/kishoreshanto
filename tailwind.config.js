/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'], theme: {
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
        }
    }, plugins: []
};