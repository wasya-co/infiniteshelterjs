
module.exports = {
  reactStrictMode: true,
  // swcMinify: true,

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },

  // From: https://nextjs.org/docs/advanced-features/static-html-export
  output: 'export',
  distDir: 'out',
}
