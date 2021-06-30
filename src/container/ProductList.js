import React from 'react';
import Product from './Product';
import {Container, Card } from 'semantic-ui-react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../Redux/action/productAction';
import Load from './loader';
// import { Divider } from 'semantic-ui-react';


const ProductList = () => {
    const [load, setLoad] = React.useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.allProducts.products);
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(error => { console.error("Error", error) });
        dispatch(setProducts(response.data));
    }
    React.useEffect(() => {
        fetchProducts();
        return setTimeout(() => { setLoad(false) },2000)
    }, [])
    return (
        <div className="product-container">
            <h1 className="h-1">
                Product List
            </h1>
            {
                load ? <Load /> :
                    <Container>
                <Card.Group centered>
                    
                    {
                        products.map(product => {
                            return <Product key={product.id} card={product} />
                        })
                    }
                    
                </Card.Group>
            </Container>
            }
        </div>
    )
}

export default ProductList;
