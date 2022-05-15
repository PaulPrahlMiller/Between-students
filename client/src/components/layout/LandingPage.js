import React, { useState, useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useLoading from '../../hooks/useLoading';
import Loading from '../../pages/Loading/Loading';
import Slider from 'react-slick';
import dog from '../../assets/dog.jpg';
import './landing.css';

const LandingHome = () => {
  const landingPic = require('../../assets/landing-top.jpg');

  const sofa = require('../../assets/cover-sofa.png');
  const decorations = require('../../assets/decorations.jpg');
  const stationery = require('../../assets/stationery.jpg');
  const lighting = require('../../assets/lighting.jpg');
  const [ProductState, productDispatch] = useProducts();
  const { products } = ProductState;

  useEffect(() => {
    console.log('products', products);
  }, [products]);

  const loading = useLoading(1500);

  if (loading) return <Loading />;


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
    <div class='container-lg-sm-md flex-direction-column'>
      <div class='card text-white'>
        <img src={landingPic} class='card-img' alt='...' />
        <div class='card-img-overlay div__overlayCard'>
          <div class='row gx-5'>
            <h5 class='card-title mt-5 h5__landing'>
              A world of <br></br> Second-Hand <br></br>Magic!
            </h5>
            <p class='card-text p__landing'>
              Modern, simple and minimal impact on our neighborhood and environment.
              <br></br>
            </p>
            <div class='link__register'>
              <Link to='/categories' class='btn btn-light my-3 hover__link'>
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class='row gx-5'>
        <div class='col-md-6 mt-5 mb-3'>
          <h5 class='font__aboveCat'>Check out our most popular products for home</h5>
        </div>
        <div class='float__right col-md-6 mt-5 mb-3'>
          <Link to={'/categories'}>
            <h5>View all</h5>
          </Link>
        </div>
      </div>
      <div class='row gx-5'>
        <div class='col-md-4 mb-5 div__catHover'>
          <Link to={'/categories/furniture'}>
            <img class='img-fluid img__catHover' alt='img' src={stationery}></img>
          </Link>
          <p>Furniture</p>
        </div>
        <div class='col-md-4 mb-5 div__catHover'>
          <Link to={`/categories/lamps & lights`}>
            <img class='img-fluid img__catHover' alt='img' src={lighting}></img>
          </Link>
          <p>Lamps</p>
        </div>
        <div class='col-md-4 mb-5 div__catHover'>
          <Link to={'/categories/home decorations'}>
            <img class='img-fluid img__catHover' alt='img' src={decorations}></img>
          </Link>
          <p>Home decorations</p>
        </div>
      </div>
      <div class='row gx-5 mx-1 mb-5 pt-3 div__aboutApp'>
        <div class='col-md-6'>
          <img class='img-fluid' alt='img' src={sofa}></img>
        </div>
        <div class='col-md-6'>
          <div class='row-md-4 text__underHeaderThree'>
            <p>
              Between Students makes it easy and convenient for you to reuse and recycle
              your stuff. Making our neighborhood a better and cleaner place is our
              mission. Reduce impact on our environment is our passion.
            </p>
          </div>
          <div class='row-md-2 link__mission'>
            <Link to='/mission' class='btn btn-light my-3 hover__mission'>
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='row gx-5'>
          <div class='col-md-6 mt-5 mb-3'>
            <h5 class='font__aboveCat'>Check out our favourite products</h5>
          </div>
          <div class='float__right col-md-6 mt-5 mb-3'>
            <Link to={'/search'}>
              <h5>View all</h5>
            </Link>
          </div>
        </div>

        {products !== null ? (
          <Slider {...settings}>
            {products.map((product) => (
              <div class='out' key={product._id}>
                <div class='card_carousel'>
                  <img
                    class='img__carousel'
                    src={product.productImage}
                    alt={product._id}
                    height={200}
                    width={210}
                  ></img>
                  <div class='card-body cardBody__carousel'>
                    <p class='card-title cardTitle__carousel'>{product.title}</p>
                    <small class='card-text text-muted cardTitle__carousel'>
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

      <div class='card bg-white my-5 text-dark'>
        <img src={dog} class='card-img' alt='...'></img>
        <div class='card-img-overlay divOverlay__bottom'>
          <div class='row gx-5'>
            <h5 class='card-title mt-5 h5__landing'>
              Love Our<br></br> neighborhood!<br></br>
            </h5>
            <p class='card-text p__landing'>
              Come and join the movement.
              <br></br>
            </p>
            <div class='link__register'>
              <Link to={'/register'} class='btn btn-light my-3 hover__link'>
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
