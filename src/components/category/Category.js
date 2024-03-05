import 'bootstrap/dist/css/bootstrap.min.css';

import Markdown from 'react-markdown';

import TabList from './TabList';

const markdown = '# Hi, *I\'m Catogory*!'

console.log(window.location.pathname);

function Category() {
  return (
    <div className='d-flex flex-column'>
      <TabList/>
    </div>
  );
}

export default Category;
