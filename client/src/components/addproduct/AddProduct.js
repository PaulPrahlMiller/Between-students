import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    console.log(e.target.files);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();
    console.log(title, description, fileName, category, cost);
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('productImage', fileName);
    formData.append('category', category);
    formData.append('cost', cost);

    setTitle('');
    setDescription('');
    setCategory('');
    setCost('');
    setFileName('');
    const res = await axios.post(
      'http://localhost:5000/api/addproduct',
      formData
    );
    console.log(res);
  };

  return (
    //<AddProductContainer>
    <div className='container'>
      <h1>Add new item for sell</h1>
      <button
        onClick={() => {
          navigate('/account');
        }}
      >
        Go back
      </button>
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
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>
            Description:
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='form-control'
              placeholder='Description'
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='category'>
            Category:
            <input
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='form-control'
              placeholder='Category'
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='cost'>
            Cost:
            <input
              type='text'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className='form-control'
              placeholder='Cost'
              required
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
              required
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
