import React from 'react';
import './PreviewProduct.css';

function PreviewProduct(props) {
  return (
    <div className='container__right d-none d-md-block d-sm-none'>
      <div className='div__outterOut'>
        <div className='div__outter'>
          <div className='div__preview'>
            <h3>Preview</h3>
          </div>
          <div className='div__details'>
            <div className='div__imgPreview'>
              {props.uploaded ? (
                <img className='img__preview' src={props.uploaded} alt=''></img>
              ) : (
                <div>
                  <h3>Your list preview: </h3> <br></br>
                  <h4>
                    As you create your listing, you can preview how it will appear to
                    others on Student Hub.
                  </h4>
                </div>
              )}
            </div>
            <div className='div__des'>
              <div className='div__desJustify'>
                <h4 className='h4__des'>Title:{props.title}</h4>
              </div>
              <div className='div__desJustify'>
                <h4 className='h4__des'>
                  Price: <span>{props.price} kr</span>
                </h4>
              </div>
              <div className='div__desJustify'>
                <h4 className='h4__des'>Description:{props.description}</h4>
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
