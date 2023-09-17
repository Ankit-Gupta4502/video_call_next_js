/** @type {import('next').NextConfig} */
const nextConfig = {
    // eslint: {
        
    // },
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
