import React from 'react';
import { hydrate } from 'react-dom';

import PostList from './components/PostList';

hydrate(
  <PostList />,
  document.getElementById('root')
);
