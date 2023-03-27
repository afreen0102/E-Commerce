import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/products';

const TestScreen = () => {

  const a = useSelector(state => state.products);  
  const b = useSelector(state => state.productdetails);
  const dispatch = useDispatch();
  
  console.log(a);

  useEffect(() => {

    dispatch(fetchProducts());

}, [dispatch])

  return (
    <div>
      
    </div>
  )
}

export default TestScreen
