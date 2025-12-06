/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Sage Palette
                sage: {
                    deep: '#7A8F79',
                    medium: '#A7BFA6',
                    light: '#DDE7D8',
                },
                // Direct color aliases for easier usage
                'sage-deep': '#7A8F79',
                'sage-medium': '#A7BFA6',
                'sage-light': '#DDE7D8',
                // Accent Colors
                army: {
                    dark: '#3C4E3B',
                },
                'army-dark': '#3C4E3B',
                gold: {
                    soft: '#BBA766',
                },
                'soft-gold': '#BBA766',
                // NEW: Navy Blue Accent for CTAs
                navy: {
                    DEFAULT: '#1E3A5F',
                    light: '#2C5282',
                    dark: '#1A365D',
                },
                'navy-blue': '#1E3A5F',
                alert: {
                    red: '#D9534F',
                },
                'alert-red': '#D9534F',
                cool: {
                    gray: '#71797E',
                },
                'cool-gray': '#71797E',
                // Legacy compatibility
                primary: '#7A8F79',
                'primary-light': '#A7BFA6',
                'primary-dark': '#3C4E3B',
                secondary: '#BBA766',
                accent: '#1E3A5F',
                // Background colors
                'off-white': '#F8F9F7',
            },
            fontFamily: {
                sans: ['Nunito Sans', 'Inter', 'sans-serif'],
                primary: ['Nunito Sans', 'Inter', 'sans-serif'],
            },
            fontSize: {
                'display': ['clamp(42px, 5vw, 56px)', { lineHeight: '1.2' }],
                'h1': ['32px', { lineHeight: '1.2', fontWeight: '800' }],
                'h2': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
                'h3': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
                'h4': ['20px', { lineHeight: '1.2', fontWeight: '600' }],
                'body-lg': ['18px', { lineHeight: '1.6' }],
                'body': ['16px', { lineHeight: '1.6' }],
                'body-sm': ['14px', { lineHeight: '1.5' }],
                'caption': ['12px', { lineHeight: '1.4' }],
            },
            spacing: {
                'xs': '4px',
                's': '8px',
                'm': '16px',
                'l': '24px',
                'xl': '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
            borderRadius: {
                'sm': '6px',
                'md': '10px',
                'lg': '16px',
                'xl': '24px',
            },
            boxShadow: {
                'low': '0px 2px 6px rgba(0, 0, 0, 0.05)',
                'medium': '0px 4px 12px rgba(0, 0, 0, 0.08)',
                'high': '0px 8px 24px rgba(0, 0, 0, 0.12)',
                'hover': '0 6px 20px rgba(122, 143, 121, 0.25)',
                'navbar': '0 2px 8px rgba(0, 0, 0, 0.08)',
            },
            maxWidth: {
                'container': '1200px',
            },
            height: {
                'navbar': '76px',
                'topbar': '38px',
                'carousel': '540px',
                'carousel-mobile': '320px',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            transitionDuration: {
                'base': '250ms',
                'fast': '200ms',
            },
            backgroundImage: {
                'sage-gradient': 'linear-gradient(135deg, #A7BFA6 0%, #DDE7D8 100%)',
                'sage-gradient-h': 'linear-gradient(to right, #7A8F79, #A7BFA6)',
                'hero-overlay': 'linear-gradient(to bottom, rgba(60, 78, 59, 0.7), rgba(122, 143, 121, 0.6))',
            },
        },
    },
    plugins: [],
}
