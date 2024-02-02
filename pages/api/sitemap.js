import { getAllStaticPaths } from '../../utils/sitemap';

export default async function handler( req, res ) {
  const sitemap = await generateSitemap();
  res.setHeader( 'Content-Type', 'text/xml' );
  res.write( sitemap );
  res.end();
}

async function generateSitemap() {
  const paths = await getAllStaticPaths(); // Implement this function to get all static paths

  const baseUrl = 'https://codingtutorials.in';
  // Replace 'example.com' with your actual domain



  const sitemapItems = paths.map( ( path ) => {
    return `
      <url>
        <loc>${baseUrl}${path}</loc>
      </url>
    `;
  } );

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapItems.join( '' )}
    </urlset>
  `;
}
