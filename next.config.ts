import type { NextConfig } from "next";

const nextConfig = {
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
