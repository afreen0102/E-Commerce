import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product'; 
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
// import { listProducts } from '../actions/productActions'
import { fetchProducts } from '../redux/slices/products';
import Loader from '../components/Loader';
import Message from '../components/Message';



const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.products)
  const  { isError, isLoading, product } = productList

  useEffect(() => {

       dispatch(fetchProducts());

  }, [dispatch])

  console.log(product);

  return (
    <div>

     <h1>Latest Products</h1>
      { isLoading ? <Loader/> 
      : isError ? <h3><Message variant='danger'>{isError}</Message></h3>
      : <Row>
        {product.map((p)=> {

         return <Col key={p?._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={p}/>
                </Col>

        })}
      </Row> } 
    </div>
  )
}

export default HomeScreen
