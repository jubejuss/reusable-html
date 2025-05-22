// Keskkonna muutuja, mis määrab, kas minimeerida CSS-i või mitte
// Vaikimisi on minimiseerimine välja lülitatud (arenduskeskkonna jaoks)
const MINIFY_CSS = process.env.MINIFY_CSS === 'true';

import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import postcssSorting from 'postcss-sorting';
import cssnano from 'cssnano';
import postcssCustomMedia from 'postcss-custom-media';

export default {
    plugins: [
      // Põhilised töötlemise pluginad
      postcssImport({
        path: ['src/css', 'src/css/partials']
      }),
      postcssNested(),
      autoprefixer(),
      
      // Vormindamine ja organiseerimine
      postcssSorting({
        'order': [
          'custom-properties',        // :root { --color: red; }
          'dollar-variables',         // $color: red;
          'declarations',             // color: red;
          'at-rules',                 // @media, @supports
          'rules'                     // .foo { ... }
        ],
        // Kasutame SMACSS järjestust omaduste jaoks
        'properties-order': 'smacss',
        // Säilitame tühikud reeglite vahel
        'preserve-empty-lines-between-children-rules': true
      }),
      
      // Optimeerimine (tingimuslik)
      ...(MINIFY_CSS ? [cssnano()] : []),
      
      // Funktsioonid
      postcssCustomMedia()  // Käsitleb kohandatud meediapäringuid
    ],
    map: {
      inline: false,
      annotation: true,
      sourcesContent: true
    }
};