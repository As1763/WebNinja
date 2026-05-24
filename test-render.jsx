import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/css-tutorial'
});
global.window = dom.window;
global.document = dom.window.document;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
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
