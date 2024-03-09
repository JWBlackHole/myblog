import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Category.css';

function Category() {

  return (
    <div className='h-100 d-flex flex-column justify-content-lg-center'>
      <div className="d-flex flex-column my-4 mx-3 mx-md-4" style={{position: 'relative', backgroundColor: 'rgba(52, 52, 52, 0.8)', minHeight: '50%'}}>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center" style={{borderLeft: '5px #999999 solid', padding: '2rem 2rem 1rem 5%'}}>
          {/* <div className="flex-grow-1"><a href={`#/article?postid=${index}`}><h2 style={{color: "#cfcfcf", margin: 0}}>ahha</h2></a></div> */}
          <div className="flex-grow-1"><h2 style={{color: "#cfcfcf", margin: 0}}>Category</h2></div>
        </div>
        <div className='d-flex flex-column mb-3' style={{width: '80%', padding: '0 5% 1rem 5%', fontSize: '18px', fontWeight: "bold"}}>
          <ul>
            <li><a href="#/home?tag=C%2FC%2B%2B"><div className="p-1 linking">C/C++</div></a></li>
            <li><a href="#/home?tag=Tutorial"><div className="p-1 linking">Tutorial</div></a></li>
            <li><a href="#/home?tag=Neuroscience"><div className="p-1 linking">Neuroscience</div></a></li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Category;
