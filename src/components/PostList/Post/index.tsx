import React from 'react';

import Post from '../../../models/post';

import './index.css';

interface PostProps {
  post: Post;
}

export default ({ post }: PostProps) => {
  return (
    <div className='post'>
      <div className='col1'>
        <img className='icon' src={ post.iconUrl } />
      </div>
      <div className='col2'>
        <div>{ post.title() }</div>
        <div>{ post.bodyText() }</div>
      </div>
    </div>
  );
}