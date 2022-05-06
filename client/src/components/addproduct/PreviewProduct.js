import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreviewProduct.css';

function PreviewProduct(props) {
  return (
    <div class='container__right d-none d-md-block d-sm-none'>
      <div class='div__outterOut'>
        <div class='div__outter'>
          <div class='div__preview'>
            <h1>Preview</h1>
          </div>
          <div class='div__details'>
            <div class='div__imgPreview'>
              <h3>Your Listing Preview</h3>
              <img
                class='div__previewImage'
                height={150}
                width={200}
                src={props.uploaded}
                alt=''
              ></img>
              {/* <h5>
                As you create your listing, you can preview how it will appear
                to others on Student Hub.
              </h5> */}
            </div>
            <div class='div__des'>
              <h4 class='h4__des'>Description:{props.description}</h4>

              <h4 class='h4__des'>Title:{props.title}</h4>
              <h4 class='h4__des'>
                Price: <span>{props.price} kr</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default PreviewProduct;
