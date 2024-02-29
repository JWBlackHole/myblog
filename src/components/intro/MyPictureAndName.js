// import './MyPicture.css';

import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyPictureAndName() {
  return (
    <div className='d-flex flex-column align-items-center p-3'>
        <Image src={require("../../imgs/selfie.jpeg")} alt='me' width={150} roundedCircle />
        <div className='mt-3'>
          <div className='d-flex justify-content-center'>
              <p className='h5' style={{color:'#cccccc', fontFamily: 'Roboto, serif', fontWeight: "bold" }}>JWBlackHole</p>
          </div>
        </div>
        
    </div>
  );
}

export default MyPictureAndName;
