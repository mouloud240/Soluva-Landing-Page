
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://soluva.dev",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    { href: "https://soluva.dev/", hreflang: "en" },
    { href: "https://soluva.dev/?lang=fr", hreflang: "fr" },
    { href: "https://soluva.dev/?lang=ar", hreflang: "ar" },
  ],
};
