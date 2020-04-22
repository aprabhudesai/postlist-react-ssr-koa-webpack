import {
  init as initFbt,
  IntlViewerContext,
} from 'fbt';
import React from 'react';
// import { renderToString } from 'react-dom/server';
import {
  renderToNodeStream,
  renderToStaticNodeStream,
} from 'react-dom/server';

import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBodyParser from 'koa-bodyparser';
import KoaStatic from 'koa-static';
import MultiStream from 'multistream';
import stringStream from 'string-to-stream';

import PostList from './components/PostList';
// import html from './html';
import { getHeadSection } from './html';

import translations from './i18n/translatedFbts.json';

var server = new Koa();
var bodyParser = new KoaBodyParser();
const router = new KoaRouter();
const DEFAULT_LOCALE = 'en-US';

server.use(KoaStatic('dist'));
server.use(bodyParser);
server.use(router.routes());

async function loadTranslations(locale: string) {
  console.log(translations);
  IntlViewerContext.locale = locale;
  initFbt({ translations });
}

router.get('/', async (ctx) => {
  console.log(ctx.query);
  let locale = DEFAULT_LOCALE;
  if (ctx.query && ctx.query.locale) {
    locale = ctx.query.locale;
  }
  
  await loadTranslations(locale);
  
  // Traditional Server Side Rendering
  // const body = renderToString(React.createElement(PostList));
  // ctx.body = html({ body });


  const language = locale.split('_')[0];
  // Stream the HTML response
  const stream = new MultiStream([
    () => stringStream(`<!DOCTYPE html><html language=${ language }>`),
    () => renderToStaticNodeStream(getHeadSection()),
    () => stringStream('<body><div id="root">'),
    () => renderToNodeStream(React.createElement(PostList)),
    () => stringStream('</div><script src="js/client.js"></script></html>'),
  ]);
  ctx.response.type = 'text/html; charset=utf-8';
  ctx.status = 200;
  ctx.body = stream;
});

server.listen(8088, () => {
  console.log('Server Listening on port 8088 🎉');
});
