import React, { FunctionComponent, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { Product as ProductType } from '../types/main'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import fetchActionProductList from '../store/productList/productList.action'

const HomeScreen: FunctionComponent = () => {
    const products = useSelector<RootState, ProductType[]>((state) => state.productList.products)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchActionProductList.fetchProducts())
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
