module.exports = {
  images: {
    domains: ['techcrunch.com', 'sketchfav.com'],
  },
  reactStrictMode: true,
  distDir: 'build',
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' }
    };
    return paths; //<--this was missing previously
  }
}
