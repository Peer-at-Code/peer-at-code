/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< Updated upstream
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
=======
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
>>>>>>> Stashed changes
  swcMinify: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
