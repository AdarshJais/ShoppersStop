import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    // const fetchProducts = async () => {
    //   // Our backend is running on port:5000 and teh fronted at port:3000 do when we do /api/products it will look in port 3000 that will definetly throw error and we also can't directly breach out to another port so In such situation we use Proxy from package.json
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // };
    // fetchProducts();
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
