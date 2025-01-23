import React, { useState } from 'react';
import './QR.css';
import Img from './qr.png'; 

const App = () => {
  const [img, setImg] = useState(Img);
  const [load, setLoad] = useState(false);
  const [dataInput, setData] = useState('');
  const [sizeInput, setSize] = useState('');

  const generate = () => {
    try {
      setLoad(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(dataInput)}&size=${sizeInput}x${sizeInput}`;
      setImg(url); 
      setLoad(false); 
    } catch (error) {
      console.log("Error in generating QR code:", error);
      setLoad(false); 
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      {load && <p>Generating QR Code...</p>}
      {img && <img src={img} alt="QR Code" className='Qr-Image' />} {/* Display the image */}
      <label className='input-label'>Enter the text to generate QR Code</label>
      <input 
        type='text' 
        id='datainput' 
        className='input-field' 
        placeholder='Enter data for QR code' 
        onChange={(e) => setData(e.target.value)} 
      />
      <label className='size-label'>Enter the image Size (e.g., 150)</label>
      <input 
        type='text' 
        id='sizeinput' 
        className='input-field' 
        placeholder='Enter preferred image size' 
        onChange={(e) => setSize(e.target.value)} 
      />
      <button className='generate-button' onClick={generate}>Generate !</button>
      <button className='generate-button' onClick={() => {
    if (img) {
        const link = document.createElement('a');
        link.href = img;
        link.download = 'QRCode.png';  
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 
    } else {
        console.log('No QR code generated to download.');
    }
}}>Download</button>

    </div>
  );
}

export default App;
