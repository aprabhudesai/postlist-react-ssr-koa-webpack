import sleep from '../helpers/sleep';
import posts from '../db/posts';

const DEFAULT_API_RESPONSE_DELAY = 1000;



export default async function getPosts(delay: number) {
  await sleep(delay || DEFAULT_API_RESPONSE_DELAY);
  return posts;
}