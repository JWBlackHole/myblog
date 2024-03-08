import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';

import ReactMarkdown from 'react-markdown';

console.log(window.location.pathname);

function AboutMe() {
  const mdfile = require('./AboutMe.md');

  const [content, setContent] = useState('');
  fetch(mdfile)
  .then(response => {
    return response.text();
  }).then(text => {
    setContent(text);
  })

  return (
    <div style={{minWidth: 0}}>
      <div className="mdfile m-3 p-3 m-md-4 p-md-4 m-lg-5 rounded d-flex flex-column align-items-center"
      style={{
        border: "2px solid #444444",
        background: 'transparent',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)'
      }}>
        <div style={{maxWidth: '600px'}}>
          <ReactMarkdown 
          children={content}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
