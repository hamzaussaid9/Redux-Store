import React from 'react';
import Load from './loader';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button,Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../Redux/action/productAction';
import { useState } from 'react';
const ProductDetails = () => {
    const [load, setLoad] = useState(true);
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state => state.selectedProduct.product);
     const fetchProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
             .catch(error => { console.error("Error", error) });
         dispatch(selectedProduct(response.data));
    }
    React.useEffect(() => {
        if(productId && productId !== '')
            fetchProducts();
        return setTimeout(() => { setLoad(false) },2000)
    }, [productId])
    return (
        <>
            {
                load ? <Load /> :
                    <div className="s-product-container">
                        <div className="left-c">
                            <img src={product.image} alt={product.category} />
                        </div>
                        <div className="right-c">
                            <h1>
                                {product.title}
                            </h1>
                            <Button
                                content='price'
                                icon= 'dollar sign'
                                color= 'red'
                                label={{ basic: true, content: product.price }}
                                labelPosition='right'
                            />
                            <p>
                                {product.description}
                            </p>
                            <Button animated="fade" fluid primary>
                                <Button.Content visible>Add to cart</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="shopping cart" />
                                </Button.Content>
                            </Button>
                        </div>
                    </div>
            }
        </>
    );
}

export default ProductDetails;
