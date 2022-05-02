import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseProducts = () => {
  const [productList, setProductList] = useState([]);
  var url = 'uploads/';

  const fetchProduct = (e) => {
    console.log(e.target);

    fetch('http://localhost:5000/api/mydetails')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((results) => {
        results.data.map((productImage) => {
          console.log(productImage);
        });
        setProductList(results.data);
        productList.map((product) => {
          console.log(product);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <h1>This is the retrived data</h1>
      <button onClick={(e) => fetchProduct(e)}>Click me!</button>;
      <table>
        <tbody>
          {productList.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.postDate}</td>
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
