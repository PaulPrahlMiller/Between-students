import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';
import { IoArrowBackSharp, IoImageOutline } from 'react-icons/io5';
import PreviewProduct from './PreviewProduct';
import useProducts from '../../hooks/useProducts';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('');
  const [ProductState, productDispatch] = useProducts();
  const [cost, setCost] = useState('');
  const [uploaded, setUploaded] = useState(undefined);
  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    setUploaded(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
    console.log(URL.createObjectURL(e.target.files[0]));
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

    await axios
      .post('http://localhost:5000/api/addproduct', formData)
      .then((res) => {
        setTitle('');
        setDescription('');
        setCategory('');
        setCost('');
        setFileName('');
        console.log(res);
      });
  };

  return (
    <div class='container__parent'>
      <div class='container__left'>
        <h1>Add new item for sell</h1>
        <div class='container__formBody'>
          <form onSubmit={changeOnClick} encType='multipart/form-data'>
            <div class='div__upload'>
              <div class='div__icon'>
                <IoImageOutline size={30}></IoImageOutline>
              </div>
              <input
                type='file'
                filename='productImage'
                className='form-control-file'
                onChange={onChangeFile}
                required
              />
              <label htmlFor='file' class='col-sm-2 col-form-label' />
            </div>
            <div class='form-floating mb-3'>
              <input
                type='text'
                class='form-control'
                id='floatingInput'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
              />
              <label htmlFor='floatingInput'>Title</label>
            </div>
            <div class='form-floating'>
              <input
                type='number'
                class='form-control input-number'
                id='floatingPassword'
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder='Cost'
              />
              <label htmlFor='floatingPassword'>Cost</label>
            </div>
            <select
              class='form-select'
              value={category}
              id='inputGroupSelect01'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Choose...</option>
              {ProductState.categories.map((cat) => {
                return (
                  <option value={cat} key={cat.id}>
                    {cat}
                  </option>
                );
              })}
            </select>

            <div class='form-floating mt-3'>
              <textarea
                class='form-control'
                placeholder='Leave a comment here'
                id='floatingTextarea2'
                height={400}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor='floatingTextarea2'>Description</label>
            </div>

            <div class='div__leftContainer'></div>
            <button type='submit' className='btn btn-primary btn__publish'>
              Publish
            </button>
          </form>
          <IoArrowBackSharp
            size={30}
            onClick={() => {
              navigate('/account');
            }}
          />
          Back
        </div>
      </div>
      {/*Preview product will render div for right container */}
      <PreviewProduct
        title={title}
        price={cost}
        description={description}
        uploaded={uploaded}
      ></PreviewProduct>
    </div>
  );
};

export default AddProduct;
