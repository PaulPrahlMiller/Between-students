import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import styles from './UseProducts.module.css';
import formatDate from '../../utils/dateFormatter';
import './sideNav.css';

const UseProducts = (props) => {
  const [productList, setProductList] = useState([]);
  const [description, setDescription] = useState('');
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
 

  useEffect(() => {
    axios('http://localhost:5000/api/products/user').then((response) => {
      var original_data = response.data;
      // console.log('original data in first useEffect', original_data);
      setProductList(original_data);
      // console.log('printing products', productList);
    });
  }, []);

  useEffect(() => {
    // console.log('changed profile', profile);
  }, [productList]);

  const handleClick = (index) => {
    const newDesList = [...productList];
    setDescription(newDesList[index].description);
    toggleShow();
  };

  const deleteProduct = async (id) => {
    console.log('id to delete', id);
    await axios
      .delete('http://localhost:5000/api/products', { data: { product_id: id } })
      .then((res) => console.log(res))
      .then(() => toggleShow());
    refresh();
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div class='div__listings'>
      <div>
        <h1>{props.email}</h1>
      </div>
      {productList.map((item, index) => {
        return (
          <div class='card mb-5 border-1'>
            <div class='row no-gutters' key={item._id}>
              <div class='col-md-4 div__useProdutimg'>
                <img
                  src={item.productImage}
                  alt='hello'
                  class='card-img'
                  className={styles.imgCard}
                ></img>
              </div>
              <div class='col-md-8'>
                <div class='card-body'>
                  <h3 class='card-title'>{item.title}</h3>
                  <h4 class='card-text' className={styles.cardTxt}>
                    {item.cost}kr
                  </h4>
                  <p class='card-text' className={styles.cardTxt}>
                    {formatDate(item.createdAt)}
                  </p>
                  <p class='card-text' className={styles.cardTxt}>
                    {item.category}
                  </p>

                  <div class='d-grid gap-2 d-md-block justify-content-md-start'>
                    <MDBBtn
                      onClick={() => {
                        deleteProduct(item._id);
                      }}
                      className='text-dark '
                      color='light'
                    >
                      Delete ITEM
                    </MDBBtn>

                    <MDBBtn
                      className='mx-2'
                      color='secondary'
                      onClick={() => handleClick(index)}
                    >
                      View item
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Success</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Item Deleted!</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Item description</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{description}</MDBModalBody>

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

export default UseProducts;
