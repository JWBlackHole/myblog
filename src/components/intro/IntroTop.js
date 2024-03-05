import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './IntroSide.css'

import { Icon } from '@iconify/react';

// import './IntroSide.css';

import MyPictureAndName from './MyPictureAndName';

function IntroTop({pictureHeight}) {

  return (
    <div className="d-flex flex-column align-items-center">
      <div className='pt-5'>
        <MyPictureAndName/>
      </div>
      
      <div className="d-flex flex-row align-items-center">
        <div className='d-flex flex-column align-items-center'>
          <a href="https://github.com/williamlin0208" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mdi:github" height="2rem"/></a>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <a href="https://github.com/JWBlackHole" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mdi:github" height="2rem"/></a>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <a href="https://line.me/ti/p/_gk6GmQQmg" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mingcute:line-app-fill" height="2rem"/></a>
        </div>
      </div>

      <div className='d-flex flex-row justify-content-center my-4' style={{width: "100%", fontSize:'11px'}}>
        <div className="d-flex flex-row justify-content-center" style={{border: '1px solid white', width: "20%", backgroundColor:"rgba(111, 111, 111, 0.5)"}}>
          <a href="#/"><div className="p-1" style={{color:"#cccccc", fontWeight:"bold"}}>Home</div></a>
        </div>
        <div className="d-flex flex-row justify-content-center" style={{border: '1px solid white', width: "20%", backgroundColor:"rgba(111, 111, 111, 0.5)"}}>
          <a href="#/category"><div className="p-1" style={{color:"#cccccc", fontWeight:"bold"}}>Category</div></a>
        </div>
        <div className="d-flex flex-row justify-content-center" style={{border: '1px solid white', width: "20%", backgroundColor:"rgba(111, 111, 111, 0.5)"}}>
          <a href="#/aboutme"><div className="p-1" style={{color:"#cccccc", fontWeight:"bold"}}>About Me</div></a>
        </div>
      </div>
    </div>
  );
}

export default IntroTop;
