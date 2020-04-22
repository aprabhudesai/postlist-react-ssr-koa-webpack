// @ts-ignore
const { fbt } = require('fbt');

import Post from '../../models/post';

const posts: Post[] = [
  {
    title: () => fbt('This is first post', 'title: first post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('First post of the day.', 'body: first post'),
  },
  {
    title: () => fbt('This is second post', 'title: second post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('Second post of the day.', 'body: second post'),
  },
  {
    title: () => fbt('This is third post', 'title: third post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('Thrid post of the day.', 'body: third post'),
  },
  {
    title: () => fbt('This is fourth post', 'title: fourth post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('Fourth post of the day.', 'body: fourth post'),
  },
  {
    title: () => fbt('This is fifth post', 'title: fifth post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('Fifth post of the day.', 'body: fifth post'),
  },
  {
    title: () => fbt('This is sixth post', 'title: sixth post'),
    iconUrl: 'img/post_image.jpg',
    bodyText: () => fbt('Sixth post of the day.', 'body: sixth post'),
  }
];

export default posts;