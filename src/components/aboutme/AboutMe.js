import 'bootstrap/dist/css/bootstrap.min.css';

import PostItem from '../post/PostItem';

import Markdown from 'react-markdown'


const markdown = '# Hi, *I\'m About Me*!'

console.log(window.location.pathname);

function AboutMe() {
  return (
    <div className='d-flex'>
      {/* <PostItem/> */}
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default AboutMe;
