import React from 'react'
import { Card,Image,Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Product = ({ card }) => {
    const {id,category, title, price, image} = card;
    return (
        <>
            <Card as='a' centered>
                <Card.Content style={{textAlign: 'center',height:'300px'}}>
                    <Image style={{ width: '100%',height: '250px'}} src={image}/>
                </Card.Content>
                <Card.Content>
                    <Card.Header textAlign="center">
                        {title}
                    </Card.Header>
                    <br />
                    <Card.Content>
                        Price: {price} $
                    </Card.Content>
                    <Card.Meta style={{float: 'right'}}>
                        {category}
                        </Card.Meta>
                </Card.Content>
                <Link to={`/Product/${id}`}>
                    <Button primary fluid content="Click for details"/>
                    </Link>
            </Card>
        </>
    )
}

export default Product;
