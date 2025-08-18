
module.exports = {
  siteUrl: "https://soluva.dev",
  generateRobotsTxt: true,
  outDir: "./public", // ensure files go to public/
  sitemapSize: 5000,
  exclude: [],

  // Force it to generate just one sitemap file
  generateIndexSitemap: false,

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

