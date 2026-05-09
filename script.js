tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#f8c8dc',
                'primary-dark': '#f0a8c4',
                secondary: '#fdfbf7',
                peach: '#ffe5d9',
                beige: '#f5f0eb',
                dark: '#4a4044',
                muted: '#8a7d82'
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(248, 200, 220, 0.4)',
                'glass': '0 8px 32px 0 rgba(248, 200, 220, 0.37)',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 5s ease-in-out infinite',
                'float-delayed': 'float 5s ease-in-out 2.5s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                    '100%': { transform: 'translateY(0px)' }
                }
            }
        }
    }
};
