/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  // ✅  options...
});

module.exports = nextConfig
