import posts from '../stores/posts';

const DEFAULT_API_RESPONSE_DELAY = 1000;

async function sleep(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default async function getPosts(delay: number) {
  await sleep(delay || DEFAULT_API_RESPONSE_DELAY);
  return posts;
}