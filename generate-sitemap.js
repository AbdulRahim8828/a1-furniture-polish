import fs from 'fs';

const pages = ['', 'about', 'services', 'contact', 'blog'];
const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>https://a1furniturepolish.com/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `,
      )
      .join('')}
  </urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
