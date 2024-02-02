import fs from 'fs';
import path from 'path';

export async function getAllStaticPaths() {
    const postsDirectory = path.join( process.cwd(), 'pages' );
    const filenames = fs.readdirSync( postsDirectory );
    const paths = filenames.map( ( filename ) => `/${filename.replace( /\.md$/, '' )}` );
    return paths;
}
