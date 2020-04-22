import React, { useEffect, useState } from 'react';
import Post from './Post';
import posts from '../../stores/posts';

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
