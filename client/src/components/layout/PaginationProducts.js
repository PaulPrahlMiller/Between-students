import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import useLoading from '../../hooks/useLoading';
import Loading from '../../pages/Loading/Loading';
import Products from '../products/Products/Products';

const Pagination = () => {
  const PER_PAGE = 5;
  //   const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(5);

  useEffect(() => {
    axios('http://localhost:5000/api/products').then((response) => {
      var original_data = response.data;
      console.log('original data in first useEffect', original_data);
      setData(original_data);
    });
  }, []);

  const loading = useLoading(1500);

  if (loading) return <Loading />;

  const handleClickPage = ({ selected: selectedPage }) => {
    console.log('Selected page', selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  console.log(offset, 'offset');

  const currentPageData = data.products
    .slice(offset, offset + PER_PAGE)
    .map((res, index) => <h1 key={index}>{res.title}</h1>);

  const pageCount = Math.ceil(data.products.length / PER_PAGE);

  return (
    <div>
      <h1>Pagination </h1>
      <div>{currentPageData}</div>

      <ReactPaginate
        previousLabel={'<-Previous'}
        nextLabel={'Next ->'}
        pageCount={pageCount}
        onPageChange={handleClickPage}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Pagination;
