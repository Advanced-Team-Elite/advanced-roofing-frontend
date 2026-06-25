/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuración para estandarizar todas las URLs con barra al final
    trailingSlash: true,

    // Optimización de imágenes
    images: {
        qualities: [25, 50, 75, 85, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'advancedroofingteam.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'header',
                        key: 'x-forwarded-proto',
                        value: 'http',
                    },
                ],
                permanent: true,
                destination: 'https://advancedroofingteam.com/:path*',
            },
        ]
    },
}

export default nextConfig;