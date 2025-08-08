const withTM = require('next-transpile-modules')(['gsap']); // add more packages if needed

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);