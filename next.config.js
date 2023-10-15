/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                //TODO
                protocol: 'https',
                hostname: 'www.decorilla.com',
            },
        ],
    },
};

module.exports = nextConfig;
