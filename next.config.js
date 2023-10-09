/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_ADDRESS
  },
};

module.exports = nextConfig;
