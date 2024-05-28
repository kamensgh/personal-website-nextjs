const withPWA = require('next-pwa')({
    dest: 'public',
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
    runtimeCaching: [
        {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "images",
                expiration: {
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            urlPattern: /\.(?:js|css)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "static-resources",
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
            },
        },
        {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "google-fonts",
            },
        },
        {
            urlPattern: /^\/.*/,
            handler: "NetworkFirst",
            options: {
                cacheName: "pages",
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
})



const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
        minimumCacheTTL: 7884000,
    },
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    assetPrefix: '/',

};


module.exports = withPWA(nextConfig);
//export default nextConfig;
