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
import { getHeadSection } from './html';

var server = new Koa();
var bodyParser = new KoaBodyParser();
const router = new KoaRouter();

server.use(KoaStatic('dist'));
server.use(bodyParser);
server.use(router.routes());

router.get('/', async (ctx) => {
  // Traditional Server Side Rendering
  // const body = renderToString(React.createElement(PostList));
  // ctx.body = html({ body });

  // Stream the HTML response
  const stream = new MultiStream([
    () => stringStream('<!DOCTYPE html><html>'),
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
