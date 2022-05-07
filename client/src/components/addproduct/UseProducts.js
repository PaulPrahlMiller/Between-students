import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import styles from './UseProducts.module.css';
import Popup from './Popup';
import './sideNav.css';
import { IoTrashOutline, IoPencilOutline, IoReorderFourOutline } from 'react-icons/io5';

const UseProducts = () => {
  const [productList, setProductList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [description, setDescription] = useState('');
  var url = 'uploads/';

  useEffect(() => {
    axios('http://localhost:5000/api/products/user').then((response) => {
      var original_data = response.data;
      console.log('original data in first useEffect', original_data);
      setProductList(original_data);
      console.log('printing products', productList);
    });
  }, []);

  useEffect(() => {
    // console.log('changed profile', profile);
  }, [productList]);

  const handleClick = (index) => {
    setButtonPopup(true);
    const newDesList = [...productList];
    setDescription(newDesList[index].description);
  };

  return (
    <div class='div__listings'>
      {productList.map((item, index) => {
        return (
          <div class='card mb-5 border-1'>
            <div class='row no-gutters' key={item._id}>
              <div class='col-md-4 div__useProdutimg'>
                <img
                  src={url + `${item.productImage}`}
                  alt='hello'
                  class='card-img'
                  className={styles.imgCard}
                ></img>
              </div>
              <div class='col-md-8'>
                <div class='card-body'>
                  <h3 class='card-title'>Title: {item.title}</h3>
                  <h4 class='card-text' className={styles.cardTxt}>
                    Price: {item.cost}kr
                  </h4>
                  <p class='card-text' className={styles.cardTxt}>
                    Available from: {item.createdAt}
                  </p>
                  <p class='card-text' className={styles.cardTxt}>
                    Category: {item.category}
                  </p>
                  <div className={styles.div__buttons}>
                    <button href='/delete' className={styles.btnCard}>
                      <IoTrashOutline className={styles.icon__delete}></IoTrashOutline>
                      Delete item
                    </button>
                    <button href='/edit' className={styles.btnCard}>
                      <IoPencilOutline className={styles.icon__delete}></IoPencilOutline>
                      Edit item
                    </button>
                    <button className={styles.btnCard} onClick={() => handleClick(index)}>
                      <IoReorderFourOutline
                        className={styles.icon__delete}
                      ></IoReorderFourOutline>
                      View item
                    </button>
                    <Popup
                      des={description}
                      trigger={buttonPopup}
                      setTrigger={setButtonPopup}
                    ></Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseProducts;
