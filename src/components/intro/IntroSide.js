import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './IntroSide.css'

import { Icon } from '@iconify/react';

// import './IntroSide.css';

import MyPictureAndName from './MyPictureAndName';

function IntroSide({pictureHeight}) {

  return (
    <div style={{border: '1px solid rgba(0, 0, 0, 0.05)', width: "300px", height:`${pictureHeight}px`}} >
      <div style={{width: "inherit", position: 'fixed', top: 0, left: 0, zIndex: -1, overflow: "hidden"}}>
        <Image src={require('../../imgs/introSideBackground.jpg')} height={pictureHeight}/>
      </div>
      <div style={{width: "inherit", position: 'fixed', top: 0, left: 0, overflow: "hidden"}} className='p-5'>
        <div className="d-flex flex-column align-items-center">
          <div className='mt-4'>
            <MyPictureAndName/> 
          </div>

          <div className='d-flex flex-column align-items-center py-4'>
            <a href="#/"><div className="p-1" style={{color:"#aaaaaa", fontWeight:"bold"}}>Home</div></a>
            <a href="#/category"><div className="p-1" style={{color:"#aaaaaa", fontWeight:"bold"}}>Category</div></a>
            <a href="#/aboutme"><div className="p-1" style={{color:"#aaaaaa", fontWeight:"bold"}}>About Me</div></a>
          </div>

          <div className="d-flex flex-row align-items-center">
            <div className='d-flex flex-column align-items-center'>
              <a href="https://github.com/williamlin0208" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mdi:github" height="2rem"/></a>
              {/* <span style={{color:"#888888"}}>new</span>*/}
            </div>
            <div className='d-flex flex-column align-items-center'>
              <a href="https://github.com/JWBlackHole" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mdi:github" height="2rem"/></a>
              {/* <span style={{color:"#888888"}}>old</span> */}
            </div>
            <div className='d-flex flex-column align-items-center'>
              <a href="https://line.me/ti/p/_gk6GmQQmg" target="_blank" rel="noreferrer"><Icon style={{ color: '#cccccc' }} icon="mingcute:line-app-fill" height="2rem"/></a>
              {/* <span style={{color:"#888888"}}>line</span> */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default IntroSide;
