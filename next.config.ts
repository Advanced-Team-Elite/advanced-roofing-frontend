/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimización de imágenes
    images: {
        // Permitimos calidad 100 y otras comunes para evitar el error del log
        qualities: [25, 50, 75, 85, 100],
        // Si cargas imágenes de dominios externos, añádelos aquí:
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'advancedteamelite.com',
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
                destination: 'https://advancedteamelite.com/:path*',
            },
        ]
    },
}

export default nextConfig;