/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:8000/api/:path*"
            }
        ]
    }
}

module.exports = nextConfig
