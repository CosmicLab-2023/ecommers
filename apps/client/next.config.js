/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "upload.wikimedia.org",
            port: "",
            pathname: "/wikipedia/commons/thumb/**",
          },
          {
            protocol: "http",
            hostname: "localhost",
            port: "1337",
            pathname: "/uploads/**",
          },
          {
            protocol: "http",
            hostname: "0.0.0.0",
            port: "1337",
            pathname: "/uploads/**",
          },
         
        ],
      },
}

module.exports = nextConfig
