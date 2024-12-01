/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgal.caravansforsale.co.uk',
                port: '',
                pathname: '/img/adphotos/paa/761/**',
            },
            {
                protocol: 'https',
                hostname: 'caravansforsale.co.uk',
                port: '',
                pathname: '/img/**',
            },
        ],
    },
};

export default nextConfig;
