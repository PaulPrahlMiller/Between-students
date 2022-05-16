import React, { useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCard, MDBCardImage, MDBRow, MDBCol, MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import scrollTop from '../../../utils/scrollTop';

const Categories = () => {
  const furniture = require('../../../assets/categories/furniture.jpg');
  const mirror = require('../../../assets/categories/mirror.jpg');
  const ceramic = require('../../../assets/categories/ceramic.jpg');
  const clothes = require('../../../assets/categories/clothes.jpg');
  const textile = require('../../../assets/categories/textile.jpg');
  const cooking = require('../../../assets/categories/cooking.jpg');
  const storage = require('../../../assets/categories/storage.jpg');
  const books = require('../../../assets/categories/books.jpg');
  const study = require('../../../assets/categories/study.jpg');
  const shoes = require('../../../assets/categories/shoes.jpg');
  const appliances = require('../../../assets/categories/appliances.jpg');
  const computers = require('../../../assets/categories/computers.jpg');
  const sports = require('../../../assets/categories/sports.jpg');
  const lighting = require('../../../assets/categories/lighting.jpg');
  const decorations = require('../../../assets/categories/decorations.jpg');
  const plants = require('../../../assets/categories/plants.jpg');
  const electric = require('../../../assets/categories/electric.jpg');

  useEffect(() => {
    scrollTop('auto');
  }, []);

  return (
    <div className='container-lg-sm-md mb-3'>
      <MDBRow className='row-cols-2 row-cols-md-4 g-5'>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/furniture'}>
                <MDBCardImage src={furniture} position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Furniture</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/mirrors'}>
                <MDBCardImage src={mirror} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Mirrors</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/Storage Containers'}>
                <MDBCardImage src={storage} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Storage Containers</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/books'}>
                <MDBCardImage src={books} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Books</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/home decorations'}>
                <MDBCardImage src={decorations} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Home Decorations</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/study materials'}>
                <MDBCardImage src={study} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Study Materials</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/ceramics'}>
                <MDBCardImage src={ceramic} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Ceramics</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/textiles'}>
                <MDBCardImage src={textile} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Textiles</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/clothes'}>
                <MDBCardImage src={clothes} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Clothes</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/shoes'}>
                <MDBCardImage src={shoes} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Shoes</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/plants'}>
                <MDBCardImage src={plants} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Plants</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/electric appliances'}>
                <MDBCardImage src={electric} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Electric Appliances</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/textiles'}>
                <MDBCardImage src={cooking} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Cooking </p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/kitchen appliances'}>
                <MDBCardImage src={appliances} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Kitchen Appliances </p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/Computers & accessories'}>
                <MDBCardImage src={computers} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Computers & Accessories</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/Lamps & lights'}>
                <MDBCardImage src={lighting} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Lamps & lights</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBRipple rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
              <Link to={'/categories/sports'}>
                <MDBCardImage src={sports} alt='...' position='top' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <p className='text-white mb-0'>Sports</p>
                  </div>
                </div>
                <div className='hover-overlay'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </div>
              </Link>
            </MDBRipple>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Categories;
