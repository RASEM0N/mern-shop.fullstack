import { createAction } from '@reduxjs/toolkit'

const fetchProducts = createAction(`productList/fetchProducts`)

const fetchActionProductList = {
    fetchProducts,
}
export default fetchActionProductList
