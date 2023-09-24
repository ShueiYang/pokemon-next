/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise this will respond with 400 Bad Request.
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    // unoptimized: true
  },
  // reactStrictMode: true,
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/pokemon-next-kim' : '',
  // output: "export"

  /* for Docker deployment  */
  output: "standalone",  
}

module.exports = nextConfig
