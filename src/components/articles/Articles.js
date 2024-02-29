import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './Articles.css'

import Pagination from 'react-bootstrap/Pagination';

import PostItem from '../post/PostItem';

// import data from '../../md/md.json';

function Articles({postInfos}) {
  const pageCapacity = 5;
  const postNum = postInfos.length;

  const [active, setActive] = useState(1);
  const [pageIndexs, setPageIndexs] = useState([]);

  useEffect(() => {
    let items = [];
    for (let number = 1; number <= postNum / pageCapacity + (postNum % pageCapacity !== 0); number++) {
      items.push(
        <Pagination.Item key={number} active={active === number} onClick={() => {setActive(number)}}>
          {number}
        </Pagination.Item>
      );
    }
    setPageIndexs(items);
  }, [active]);


  return (
    <div className='d-flex flex-column align-items-center'>
      <>
      {
        postInfos
        .map((postInfo, index) => <PostItem index={index} {...postInfo}/>)
        .filter((postInfo, index) => (index < pageCapacity * active && index >= pageCapacity * (active - 1))
        )
      }
      </>
      
      <div className='mt-3 d-flex justify-content-center'>
        <Pagination>{pageIndexs}</Pagination>
      </div>
    </div>
  );
}

export default Articles;
