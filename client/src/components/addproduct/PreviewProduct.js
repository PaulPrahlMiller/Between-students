import React from 'react';
import './PreviewProduct.css';

function PreviewProduct(props) {
  return (
    <div class='container__right d-none d-md-block d-sm-none'>
      <div class='div__outterOut'>
        <div class='div__outter'>
          <div class='div__preview'>
            <h3>Preview</h3>
          </div>
          <div class='div__details'>
            <div class='div__imgPreview'>
              {props.uploaded ? (
                <img class='img__preview' src={props.uploaded} alt=''></img>
              ) : (
                <h3>
                  Your list preview: <br></br>
                  <h4>
                    As you create your listing, you can preview how it will appear to
                    others on Student Hub.
                  </h4>
                </h3>
              )}
            </div>
            <div class='div__des'>
              <div class='div__desJustify'>
                <h4 class='h4__des'>Title:{props.title}</h4>
              </div>
              <div class='div__desJustify'>
                <h4 class='h4__des'>
                  Price: <span>{props.price} kr</span>
                </h4>
              </div>
              <div class='div__desJustify'>
                <h4 class='h4__des'>Description:{props.description}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default PreviewProduct;
