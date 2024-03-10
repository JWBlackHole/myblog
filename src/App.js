import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import IntroSide from './components/intro/IntroSide';
import IntroTop from './components/intro/IntroTop';
import Home from "./components/home/Home";
import Article from './components/Article/Article';
import Category from "./components/category/Category";
import AboutMe from "./components/aboutme/AboutMe";
import PostPage from "./components/post/PostPage";

import data from './md/all_md.json';

function App() {
  const allPostInfos = data.mardowns;

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
      <div className='d-flex flex-column flex-md-row' style = {{position: 'relative'}}>
        <div className='d-none d-lg-block'>
          <IntroSide pictureHeight={pictureHeight}/>
        </div>
        <div className='h-100 w-100  ml-lg-300' style={{minWidth: 0}}>
          <div style={{position: 'fixed', zIndex: -1, overflow: "hidden"}}>
            <Image src={require('./imgs/background.jpg')} height={pictureHeight} width={pictureWidth}/>
          </div>
          <div className='d-block d-lg-none pb-4'>
            <IntroTop pictureHeight={pictureHeight}/>
          </div>
          <div className='h-100'>
            <Routes>
              <Route index element={<Home allPostInfos={allPostInfos}/>} />
              <Route path="/category" element={<Category />} />
              <Route path="/article" element={<PostPage allPostInfo={allPostInfos[search.get('postid')]}/>} />
              <Route path="/articles" element={<Article allPostInfos={allPostInfos} tag={search.get('tag')}/>} />
              <Route path="/aboutme" element={<AboutMe/>}/>
              <Route path="*" element={<Home allPostInfos={allPostInfos}/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
