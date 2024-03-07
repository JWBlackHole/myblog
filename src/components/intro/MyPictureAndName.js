// import './MyPicture.css';

import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MyPictureAndName.css';

function MyPictureAndName() {
  return (
    <div className='d-flex flex-column align-items-center p-3 imgdiv'>
        <div className='imgdiv rounded-circle' style={{overflow: 'hidden', width: '150px'}}>
          <Image src={require("../../imgs/selfie.jpeg")} alt='me' width={150} roundedCircle />
        </div>
        <div className='mt-3'>
          <div className='d-flex justify-content-center'>
              <p className='h5' style={{color:'#cccccc', fontFamily: 'Roboto, serif', fontWeight: "bold", fontSize: '1.4rem' }}>JW BlackHole</p>
          </div>
        </div>
        
    </div>
  );
}

export default MyPictureAndName;
