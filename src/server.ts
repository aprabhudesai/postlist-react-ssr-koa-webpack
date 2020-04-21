import React from 'react';
import { renderToString } from 'react-dom/server';

import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBodyParser from 'koa-bodyparser';
import KoaStatic from 'koa-static';

import PostList from './components/PostList';
import html from './html';

var server = new Koa();
var bodyParser = new KoaBodyParser();
const router = new KoaRouter();

server.use(KoaStatic('dist'));
server.use(bodyParser);
server.use(router.routes());

router.get('/', async (ctx) => {
  const body = renderToString(React.createElement(PostList));
  ctx.body = html({ body });
});

server.listen(8088, () => {
  console.log('Server Listening on port 8088 🎉');
});
