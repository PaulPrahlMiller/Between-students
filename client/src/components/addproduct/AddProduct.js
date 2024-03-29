import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import './AddProduct.css';
import { IoImageOutline } from 'react-icons/io5';
import PreviewProduct from './PreviewProduct';
import useProducts from '../../hooks/useProducts';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('');
  const [ProductState] = useProducts();
  const [cost, setCost] = useState('');
  const [uploaded, setUploaded] = useState(undefined);
  const [shown, setShown] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(true);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    setUploaded(URL.createObjectURL(e.target.files[0]));
    setShown(true);
  };

  const allFilled = () => {
    if (
      (title !== '') &
      (description !== '') &
      (fileName !== '') &
      (category !== '') &
      (cost !== '')
    ) {
      console.log('All filled');
      setSubmitBtn(false);
    }
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
      .post('/api/products', formData)
      .then((res) => {
        setTitle('');
        setDescription('');
        setCategory('');
        setCost('');
        setFileName('');
      })
      .then(toggleShow())
      .then(() => window.location.reload(false));
  };

  return (
    <div className='container__parent'>
      <div className='div__leftWhole'>
        <div className='container__leftAddProduct'>
          <div className='div__headerLeft'>
            <h1>Item for sale</h1>
          </div>

          <div className='container__formBody'>
            <form onSubmit={changeOnClick} encType='multipart/form-data'>
              <div className='div__upload'>
                {!shown && <h5>Add a photo</h5>}
                <div className='div__icon'>
                  <input
                    type='file'
                    filename='productImage'
                    className='file__upload'
                    onChange={onChangeFile}
                    required
                  />
                  {shown ? (
                    <img
                      className='div__previewImage'
                      height={150}
                      width={210}
                      src={uploaded}
                      alt=''
                    ></img>
                  ) : (
                    <IoImageOutline size={30}></IoImageOutline>
                  )}
                </div>

                <label htmlFor='file' className='col-sm-2 col-form-label' />
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='floatingInput'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Title'
                />
                <label htmlFor='floatingInput'>Title</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='number'
                  className='form-control input-number'
                  id='floatingPassword'
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder='Cost'
                />
                <label htmlFor='floatingPassword'>Cost</label>
              </div>
              <select
                className='form-select mb-3'
                value={category}
                id='inputGroupSelect01'
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Category</option>
                {ProductState.categories.map((cat, index) => {
                  return (
                    <option value={cat} key={index}>
                      {cat}
                    </option>
                  );
                })}
              </select>
              <textarea
                className='form-floating form-control textarea-des'
                placeholder='Description'
                id='floatingTextarea2'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  allFilled();
                }}
              ></textarea>
              <div className='div__btnPublish'>
                <button
                  type='submit'
                  className='btn btn-primary btn__publish'
                  disabled={submitBtn}
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PreviewProduct
        title={title}
        price={cost}
        description={description}
        uploaded={uploaded}
      ></PreviewProduct>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Success</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>New listing created!</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default AddProduct;
