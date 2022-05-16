import React, { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../../pages/Loading/Loading';
import Slider from 'react-slick';
import dog from '../../assets/dog.jpg';
import './landing.css';
import scrollTop from '../../utils/scrollTop';

const LandingHome = () => {
  useEffect(() => {
    scrollTop('auto');
  }, []);

  const landingPic = require('../../assets/landing-top.jpg');

  const sofa = require('../../assets/cover-sofa.png');
  const decorations = require('../../assets/decorations.jpg');
  const stationery = require('../../assets/stationery.jpg');
  const lighting = require('../../assets/lighting.jpg');
  const productState = useProducts()[0];
  const { products } = productState;

  let settings = {
    inifity: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className='container-lg-sm-md flex-direction-column'>
      <div className='card text-white'>
        <img src={landingPic} className='card-img' alt='...' />
        <div className='card-img-overlay div__overlayCard'>
          <div className='row gx-5'>
            <h5 className='card-title mt-5 h5__landing'>
              A world of <br></br> Second-Hand <br></br>Magic!
            </h5>
            <p className='card-text p__landing'>
              Modern, simple and minimal impact on our neighborhood and environment.
              <br></br>
            </p>
            <div className='link__register'>
              <Link to='/categories' className='btn btn-light my-3 hover__link'>
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row gx-5'>
        <div className='col-md-6 mt-5 mb-3'>
          <h5 className='font__aboveCat'>Check out our most popular products for home</h5>
        </div>
        <div className='float__right col-md-6 mt-5 mb-3'>
          <Link to={'/categories'}>
            <h5>View all</h5>
          </Link>
        </div>
      </div>
      <div className='row gx-5'>
        <div className='col-md-4 mb-5 div__catHover'>
          <Link to={'/categories/furniture'}>
            <img className='img-fluid img__catHover' alt='img' src={stationery}></img>
          </Link>
          <p>Furniture</p>
        </div>
        <div className='col-md-4 mb-5 div__catHover'>
          <Link to={`/categories/lamps & lights`}>
            <img className='img-fluid img__catHover' alt='img' src={lighting}></img>
          </Link>
          <p>Lamps</p>
        </div>
        <div className='col-md-4 mb-5 div__catHover'>
          <Link to={'/categories/home decorations'}>
            <img className='img-fluid img__catHover' alt='img' src={decorations}></img>
          </Link>
          <p>Home decorations</p>
        </div>
      </div>
      <div className='row gx-5 mx-1 mb-5 pt-3 div__aboutApp'>
        <div className='col-md-6'>
          <img className='img-fluid' alt='img' src={sofa}></img>
        </div>
        <div className='col-md-6'>
          <div className='row-md-4 text__underHeaderThree'>
            <p>
              Between Students makes it easy and convenient for you to reuse and recycle
              your stuff. Making our neighborhood a better and cleaner place is our
              mission. Reduce impact on our environment is our passion.
            </p>
          </div>
          <div className='row-md-2 link__mission'>
            <Link to='/mission' className='btn btn-light my-3 hover__mission'>
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gx-5'>
          <div className='col-md-6 mt-5 mb-3'>
            <h5 className='font__aboveCat'>Check out our favourite products</h5>
          </div>
          <div className='float__right col-md-6 mt-5 mb-3'>
            <Link to={'/search'}>
              <h5>View all</h5>
            </Link>
          </div>
        </div>

        {products !== null ? (
          <Slider {...settings}>
            {products.map((product) => (
              <div className='out' key={product._id}>
                <div className='card_carousel'>
                  <Link to={`/${product.category}/${product._id}`}>
                    <img
                      className='img__carousel'
                      src={product.productImage}
                      alt={product._id}
                      height={200}
                      width={210}
                    />
                  </Link>
                  <div className='card-body cardBody__carousel'>
                    <p className='card-title cardTitle__carousel'>{product.title}</p>
                    <small className='card-text text-muted cardTitle__carousel'>
                      Price {product.cost} kr
                    </small>
                    <br></br>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <Loading></Loading>
        )}
      </div>

      <div className='card bg-white my-5 text-dark'>
        <img src={dog} className='card-img' alt='...'></img>
        <div className='card-img-overlay divOverlay__bottom'>
          <div className='row gx-5'>
            <h5 className='card-title mt-5 h5__landing'>
              Love Our<br></br> neighborhood!<br></br>
            </h5>
            <p className='card-text p__landing'>
              Come and join the movement.
              <br></br>
            </p>
            <div className='link__register'>
              <Link to={'/register'} className='btn btn-light my-3 hover__link'>
                Join Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
