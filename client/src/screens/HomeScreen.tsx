import React, { FunctionComponent } from 'react'
import products from '../mocks/products'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product/Product'

const HomeScreen: FunctionComponent = () => {
    return (
        <React.Fragment>
            <h1>Latest Products</h1>
            <Row>
                {products.map((p) => {
                    return (
                        <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={p} />
                        </Col>
                    )
                })}
            </Row>
        </React.Fragment>
    )
}

export default HomeScreen
