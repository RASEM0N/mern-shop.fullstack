import productList from './productList/productList.slice'
import { all } from 'redux-saga/effects'
import productListSaga from './productList/productList.saga'

export const rootReducer = {
    productList: productList,
}

export const rootSaga = function* () {
    yield all([productListSaga()])
}
