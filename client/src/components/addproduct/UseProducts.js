import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UseProducts = () => {
  const [productList, setProductList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  var url = 'uploads/';

  useEffect(() => {
    axios('http://localhost:5000/api/user').then((response) => {
      var original_data = response.data;
      console.log('original data in first useEffect', original_data);
      setProductList(original_data);
      console.log('printing products', productList);
    });
  }, []);

  useEffect(() => {
    console.log('Changed products: ', productList);
  }, [productList]);

  return (
    <div className='container'>
      <h1>This is the retrived data</h1>
      <button
        onClick={() => {
          navigate('/create-item');
        }}
      >
        Create a new item for sell
      </button>
      ;
      <table>
        <tbody>
          {productList.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.createdAt}</td>
                <td>{item.cost}</td>
                <td>{item.category}</td>
                <td>{item.productImage}</td>
                <img
                  src={url + `${item.productImage}`}
                  alt='hello'
                  width={70}
                  height={50}
                ></img>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UseProducts;
