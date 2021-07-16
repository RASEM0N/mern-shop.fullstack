import React, { FunctionComponent, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { ProductType } from '../types/cart'
import axios from 'axios'
import { ResponseManyProducts } from '../../../server/src/types/web'

const HomeScreen: FunctionComponent = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        axios.get<ResponseManyProducts>('http://localhost:5001/api/product').then(({ data }) => {
            if (data.data) setProducts(data.data.products)
        })
    }, [])

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
