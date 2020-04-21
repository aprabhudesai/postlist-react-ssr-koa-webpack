import React from 'react';

import posts from '../../stores/posts';
import Post from './Post';

import './index.css';

export default () => {
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
