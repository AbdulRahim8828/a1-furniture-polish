
import fs from 'fs';
import path from 'path';

// Static pages
const pages = ['', 'about', 'services', 'contact', 'blog'];
const baseUrl = 'https://a1furniturepolish.com';

// Generate URLs for static pages
const staticPageUrls = pages.map(page => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('');

// --- Dynamically add blog post URLs ---

// 1. Read the blog post data file
const blogPostsFilePath = path.resolve('src/data/blogPosts.ts');
const blogPostsFileContent = fs.readFileSync(blogPostsFilePath, 'utf8');

// 2. Extract slugs using regex
const slugRegex = /slug: '([^']+)'/g;
let match;
const blogPostSlugs = [];
while ((match = slugRegex.exec(blogPostsFileContent)) !== null) {
  blogPostSlugs.push(match[1]);
}

// 3. Generate URLs for blog posts
const blogPostUrls = blogPostSlugs.map(slug => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('');

// --- Combine all URLs and generate sitemap ---

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPageUrls}
  ${blogPostUrls}
</urlset>
`;

// Write the sitemap to the public directory
fs.writeFileSync('public/sitemap.xml', sitemap.trim());

console.log('Sitemap generated successfully!');
