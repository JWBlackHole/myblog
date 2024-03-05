import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import IntroSide from './components/intro/IntroSide';
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Articles from "./components/articles/Articles";
import PostPage from "./components/post/PostPage";

import data from './md/all_md.json';

function App() {
  const postInfos = data.mardowns;

  const [pictureHeight, setPictureHeight] = useState(window.innerHeight);
  const [pictureWidth, setPictureWidth] = useState(window.innerWidth);

  const [search] = useSearchParams();

  const handleResize = () => {
    setPictureHeight(Math.max(300, window.innerHeight));
    setPictureWidth(window.innerWidth);
  }

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
      <div className='d-flex' style = {{height: '100%'}}>
        <div className='d-none d-md-block'>
          <IntroSide pictureHeight={pictureHeight}/>
        </div>
        <div className='w-100' style={{minWidth: 0}}>
          <div style={{position: 'fixed', zIndex: -1, overflow: "hidden"}}>
            <Image src={require('./imgs/background.jpg')} height={pictureHeight} width={pictureWidth}/>
          </div>
          <div>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="category" element={<Category />} />
              <Route path="articlelist" element={<Articles postInfos={postInfos}/>} />
              <Route path="article" element={<PostPage postInfo={postInfos[search.get('postid')]}/>} />
              <Route path="*" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
