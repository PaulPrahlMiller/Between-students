import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import useLoading from '../../../hooks/useLoading';
import ProductItem from '../ProductItem/ProductItem';
import Loading from '../../../pages/Loading/Loading';
import styles from './Products.module.css';
import range from '../../../utils/range';

const Products = (props) => {
  // Use the products context
  const productState = useProducts()[0];

  // Destructure values from the state
  const { products, filteredProducts, categoryProducts } = productState;

  const PRODUCTS_PER_PAGE = 12;

  const [pages, setPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const pages =
      filteredProducts?.length / PRODUCTS_PER_PAGE ||
      categoryProducts?.length / PRODUCTS_PER_PAGE ||
      products?.length / PRODUCTS_PER_PAGE ||
      0;
    setPages(Math.ceil(pages));
    setCurrentPage(1);
  }, [filteredProducts, categoryProducts, products]);

  const activePageButton = {
    color: 'dodgerblue'
  };

  // Updates the current page when location changes to the currentPage value
  // that is set in the location state object or 1 if not set.
  useEffect(() => {
    setCurrentPage(location.state?.currentPage || 1);
  }, [location]);

  const handleClick = (page) => {
    setCurrentPage(page);
    // Set the currentPage in the location state so the correct page
    // number is set when the user navigates back.
    navigate(location.pathname, { state: { currentPage: page } });
  };

  const loading = useLoading(500);

  if (loading) return <Loading />;

  return (
    <Fragment>
      {products?.length === 0 ||
      filteredProducts?.length === 0 ||
      categoryProducts?.length === 0 ? (
        <div className={styles.noProducts}>There is currently no products available</div>
      ) : products !== null ? ( // Check if there are products to render
        <div className={styles.products}>
          {categoryProducts !== null ? ( // If categoryProducts !== null, it will contain an array of products filtered by category
            categoryProducts.map((product, index) => {
              if (index >= currentPage - 1 && index < currentPage * PRODUCTS_PER_PAGE) {
                return <ProductItem key={product._id} product={product} />;
              }
              return null;
            })
          ) : filteredProducts !== null ? ( // If filteredProducts !== null, it will contain an array of products filtered by search term
            filteredProducts.length === 0 ? (
              <div className={styles.noMatch}>No items matched your search</div>
            ) : (
              filteredProducts.map((product, index) => {
                if (index >= currentPage - 1 && index < currentPage * PRODUCTS_PER_PAGE) {
                  return <ProductItem key={product._id} product={product} />;
                }
                return null;
              })
            )
          ) : (
            // If no filters are active, all products will be rendered
            products.map((product, index) => {
              if (
                index >= currentPage * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE &&
                index < currentPage * PRODUCTS_PER_PAGE
              ) {
                return <ProductItem key={product._id} product={product} />;
              }
              return null;
            })
          )}
        </div>
      ) : (
        <Loading />
      )}
      <div className={styles.pageButtons}>
        {/* Renders correct amount of buttons needed depending on amount of pages */}
        {[...range(1, pages)].map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={styles.pageButton}
            style={currentPage === page ? activePageButton : undefined}
          >
            {page}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
