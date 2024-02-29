import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import PostPage from '../post/PostPage';

import Markdown from 'react-markdown';

const markdown = '# Hi, *I\'m home*!'

function Home() {

  return (
    <div className='d-flex align-items-center'>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default Home;
