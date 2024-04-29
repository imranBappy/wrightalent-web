

export default function minifest() {
    return {
        name: 'Welcome to Wrightalent',
        short_name: 'Wrightalent',
        description: 'Wrightalent is a platform that connects job seekers with employers. We help job seekers find the right job and employers find the right candidate.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}