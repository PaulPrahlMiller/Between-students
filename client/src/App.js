import { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import AddProduct from './components/welcome/AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [message, setMessage] = useState('');
  // const [images, setImages] = useState([]);
  // const [imageURLs, setImageURLs] = useState([]);

  // function onImageChange(e) {
  //   setImages([...e.target.files]);
  //   console.log('====================================');
  //   console.log(e.target.files);
  //   console.log('====================================');
  // }

  // useEffect(() => {
  //   const fetchFromApi = () => {
  //     fetch('/api')
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.message));
  //   };
  //   fetchFromApi();
  // }, [message]);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImageUrls = [];
  //   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //   console.log('====================================');
  //   console.log(newImageUrls);
  //   console.log('====================================');
  //   setImageURLs(newImageUrls);
  // }, [images]);

  return (
    <div className='App'>
      Hello to MERN APP <br />
      {/* <h1 style={{ textAlign: 'center' }}>Fullstack MERN application</h1>
      <Welcome message={message} /> */}
      <AddProduct></AddProduct>
    </div>
  );
}

export default App;
