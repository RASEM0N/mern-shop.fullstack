import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import products from '../mocks/products'
import { Col, Image, ListGroup, Row, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating/Rating'

const ProductScreen = () => {
    const match = useRouteMatch<{
        id: string
    }>()

    const product = products.find((p) => p._id === match.params.id)

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
