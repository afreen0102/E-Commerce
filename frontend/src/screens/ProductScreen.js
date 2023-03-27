import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/slices/productDetails'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';

const ProductScreen = () => {

  let {id} = useParams(); 
  let navigate = useNavigate();

  const [qty, setQty] = useState(1)

  const dispatch = useDispatch();
  const product = useSelector(state => state.productdetails);

  const productlist = useSelector(state => state.products);

  console.log(productlist);

  const { isLoading, isError, prd } = product
  useEffect(() => {

    dispatch(fetchProductDetails(id))

  }, [dispatch,id])

  const addToCartHandler = (product) => {
    // navigate(`/cart/${id}?qty=${qty}`);
    dispatch(addToCart(product));
  };


  return (
    <div>
       {/* {console.log(prd)} */}
      <Link to='/' className="btn btn-light my-3 ">Go Back</Link>
      {isLoading ? 
      <Loader /> : 
      isError ? <Message variant='danger'>{isError}</Message>
      // : <h1>{prd?.name}</h1>
      :<Row>
    <Col md={6}>
    <Image src={prd?.image} alt={prd?.name} fluid/>
    </Col>
    <Col md={3}>
        <ListGroup variant="flush">

            <ListGroupItem>
                <h3>{prd?.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <Rating value={prd?.rating} text={`${prd?.numReviews} reviews`} color={'#f8e825'}/>
            </ListGroupItem>

            <ListGroupItem>
                Price: ${prd?.price}
            </ListGroupItem>

            <ListGroupItem>
                Description: ${prd?.description}
            </ListGroupItem>
        </ListGroup>
    </Col>
    <Col md={3}>
       <Card>
        <ListGroup variant='flush'>
            <ListGroupItem>
                <Row>
                    <Col>Price:</Col>
                    <Col>
                        ${prd?.price}
                    </Col>
                </Row>
            </ListGroupItem>

            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>
                       {prd?.countInStock>0 ? 'In Stock' : 'Out of Stock'} 
                    </Col>
                </Row>
            </ListGroupItem>
            {prd?.countInStock > 0 && (
                <ListGroupItem>
                    <Row>
                        <Col>Qty</Col>
                        <Col xs='auto' className='my-1'>
                           <Form.Control as="select" vlaue={qty} onChange={(e) => setQty(e.target.value) }>
                               {
                                [...Array(prd.countInStock).keys()].map((x) =>{

                                return  (
                                    <option key={x+1} value={x+1}>
                                        {x+1}
                                    </option>
                                )})
                               }
                           </Form.Control>
                        
                        </Col>
                    </Row>   
                </ListGroupItem>    
            )}
            <ListGroupItem>
                <Button onClick={() =>addToCartHandler(prd)} className='btn-black' disabled={prd?.countInStock === 0 ? true : false} type='button'>Add to Cart</Button>
            </ListGroupItem>

        </ListGroup>
       </Card>

    </Col>
  </Row>
 }
</div>
  )  
}

export default ProductScreen
