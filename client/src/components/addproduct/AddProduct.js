import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();
    console.log(title, description, fileName);
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('productImage', fileName);

    setTitle('');
    setDescription('');

    await fetch('http://localhost:5000/api/add', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => console.log(data)); // get the data here!
  };

  return (
    //<AddProductContainer>
    <div className='container'>
      <h1>Add new item for sell</h1>
      <form onSubmit={changeOnClick} encType='multipart/form-data'>
        <div className='form-group'>
          <label htmlFor='title'>
            Title:
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control'
              placeholder='Title'
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>
            Desccription:
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='form-control'
              placeholder='Description'
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='file'>
            Choose Item Image
            <input
              type='file'
              filename='productImage'
              className='form-control-file'
              onChange={onChangeFile}
            />
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Post Item
        </button>
      </form>
    </div>
    //</AddProductContainer>
  );
};

export default AddProduct;
