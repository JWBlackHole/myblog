import React, { useState, useEffect } from 'react';
// import MathJax from 'better-react-mathjax';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PostPage.css';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './CodeBlock';

function PostPage({postInfo}) {
  console.log(postInfo);

  const [content, setContent] = useState('');

  const mdfile = require(`../../md/${postInfo.file}`)
  fetch(mdfile)
  .then(response => {
    return response.text();
  }).then(text => {
    setContent(text);
  })


  return (
    <div style={{minWidth: 0}}>
      <div className="mdfile" style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', margin:'3%', padding:"3%"}}>
        <ReactMarkdown 
          children={content} 
          components={{ 
            code: CodeBlock
          }}/>
      </div>
    </div>
  );
}

export default PostPage;
