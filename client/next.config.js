/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/search",
        destination: "https://api.pcrdfans.com/x/v1/search",
      },
    ];
  },
  images: {
    domains: ["i.ibb.co", "expugn.github.io"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
