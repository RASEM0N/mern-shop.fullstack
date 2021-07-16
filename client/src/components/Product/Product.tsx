import React, { FunctionComponent } from 'react'
import { ProductType } from '../../types/cart'
import { Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface PropsType {
    product: ProductType
}

const Product: FunctionComponent<PropsType> = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <CardImg src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>

                <Card.Text as="h3">{product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product