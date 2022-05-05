import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import styles from './UseProducts.module.css';
import Popup from './Popup';

const UseProducts = () => {
  const [productList, setProductList] = useState([]);
  const [profile, setProfile] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  var url = 'uploads/';

  useEffect(() => {
    axios('http://localhost:5000/api/user').then((response) => {
      var user_data = response.data;
      console.log('original data in first useEffect', user_data);
      setProfile(user_data);
      console.log('printing user profile', profile);
    });
    axios('http://localhost:5000/api/userproduct').then((response) => {
      var original_data = response.data;
      console.log('original data in first useEffect', original_data);
      setProductList(original_data);
      console.log('printing products', productList);
    });
  }, []);

  useEffect(
    () => {
      // console.log('changed profile', profile);
    },
    [profile],
    [productList]
  );

  const handleClick = (index) => {
    setButtonPopup(true);
    const newDesList = [...productList];
    setDescription(newDesList[index].description);
  };

  return (
    <div className='container'>
      <div className={styles.container}>
        <h1>Your profile</h1>
        <h3>Hello! User {profile.email}</h3>
        <h2>
          You are active on student hub since: {profile.registration_date}
        </h2>
        <button
          className={styles.btnItem}
          onClick={() => {
            navigate('/create-item');
          }}
        >
          Create a listing
        </button>
      </div>

      {productList.map((item, index) => {
        return (
          <div class='card mb-5 border-1'>
            <div class='row no-gutters' key={item._id}>
              <div class='col-md-4'>
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
                  <button href='/delete' className={styles.btnCard}>
                    Delete item
                  </button>
                  <button href='/edit' className={styles.btnCardEdit}>
                    Edit item
                  </button>
                  <button
                    className={styles.btnCardView}
                    onClick={() => handleClick(index)}
                  >
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
        );
      })}
    </div>
  );
};

export default UseProducts;
