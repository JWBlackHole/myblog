import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from 'react-bootstrap/Pagination';

import PostItem from '../post/PostItem';
import Article from '../Article/Article';


function Home({allPostInfos}) {
  return (
    <Article allPostInfos={allPostInfos} tag={null}></Article>
  );
}

export default Home;
