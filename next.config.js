/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  images: {
    domains: ["flowbite.com", "wedding.innovacoresv.com"]
  }
};

module.exports = nextConfig;
