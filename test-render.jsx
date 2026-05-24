import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import CssTutorial from './src/pages/CssTutorial';

try {
  const html = renderToString(
    <StaticRouter location="/css-tutorial">
      <CssTutorial />
    </StaticRouter>
  );
  console.log("Render successful, HTML length:", html.length);
} catch(e) {
  console.error("REACT RENDER ERROR:", e);
}
