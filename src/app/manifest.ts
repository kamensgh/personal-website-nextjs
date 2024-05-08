
export default function manifest() {
  return {
    name: 'Kwame Mensah',
    short_name: 'kamensGH',
    description: 'Front-end Engineer',
    start_url: 'https://kamensgh.com/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#fff',
    icons: [
      {
        src: '/images/logos/yellow.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/logos/yellow.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    id: '/?source=pwa',
  };
}
