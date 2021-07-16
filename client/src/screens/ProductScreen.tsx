import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Col, Image, ListGroup, Row, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import axios from 'axios'
import { Product } from '../types/main'
import { ResponseProduct } from '../types/web'

const ProductScreen = () => {
    const [product, setProduct] = useState<Product | null>(null)
    const match = useRouteMatch<{
        id: string
    }>()
    const productId = match.params.id

    useEffect(() => {
        axios
            .get<ResponseProduct>(`http://localhost:5001/api/product/${productId}`)
            .then(({ data }) => {
                if (data.data) setProduct(data.data.product)
            })
    }, [])

    if (!product) {
        return <div>Product not found...</div>
    }

    return (
        <React.Fragment>
            <Link className="btn btn-light my-3" to="/">
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    disabled={product.countInStock === 0}
                                    className="btn-block"
                                    type="button">
                                    Add To Card
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ProductScreen
