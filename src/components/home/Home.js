import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from 'react-bootstrap/Pagination';

import PostItem from '../post/PostItem';


function Home({allPostInfos, tag}) {
  const pageCapacity = 5;
  const initialPosts = () => {
    return allPostInfos
      .filter((postInfo, index) => {
        if(tag === null)
          return true;
        return postInfo.tags.includes(tag)
      })
  }

  const [active, setActive] = useState(1);
  const [pageIndexs, setPageIndexs] = useState([]);
  const [posts, setPosts] = useState(initialPosts());

  

  useEffect(() => {
    const postNum = posts.length;
    // console.log(postNum)
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
      posts
      .filter((e, index) => {
        return (active - 1) * pageCapacity <= index && index < active * pageCapacity
      })
      .map((e, index) => (
        <div className="w-100" key={index}>
          <div className='my-4 mx-3 mx-md-4'>
            <PostItem index={index} {...e}/>
          </div>
        </div>
      ))
      }
      </>
      <div className='mt-3 d-flex justify-content-center'>
        <Pagination>{pageIndexs}</Pagination>
      </div>
    </div>
  );
}

export default Home;
