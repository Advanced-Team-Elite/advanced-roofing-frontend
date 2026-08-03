/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,

    images: {
        qualities: [25, 50, 75, 85, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'advancedroofingteam.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dca79rb3c/**',
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
        ];
    },
};

export default nextConfig;