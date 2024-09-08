/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
        {
            source: '/',
            destination: '/lander',
            permanent: true,
        },
        ]
    },
};

export default nextConfig;
