import React, { useEffect, useState } from 'react';

import getPosts from '../../backend/getPosts';
import Post from './Post';

import './index.css';

export default () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPostsData() {
      const response = await getPosts(1000);
      setPosts(response);
    }

    getPostsData();
  }, [ posts ]);
  return (
    <div className='post-list'>
      {
        posts.map((post, i) => {
          return <Post post={ post } key={ i }/>;
        })
      }
    </div>
  );
}
