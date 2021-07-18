import { all, call, put, take } from 'redux-saga/effects'
import { actionProductList } from './productList.slice'
import { STATUS } from '../../types/main'
import axios from 'axios'
import { ResponseProductsList } from '../../types/web'

const fetchProducts = async (): Promise<ResponseProductsList> => {
    const res = await axios.get<ResponseProductsList>(`http://localhost:5001/api/product`)
    return res.data
}

const sagaFetchProducts = function* () {
    while (true) {
        yield take(`productList/fetchProducts`)
        yield put(actionProductList.setStatus(STATUS.LOADING))
        try {
            const data: ResponseProductsList = yield call(fetchProducts)

            if (data.success && data.data) {
                yield put(actionProductList.setProducts(data.data.products))
                yield put(actionProductList.setStatus(STATUS.SUCCESS))
            }

            if (!data.success) {
                yield put(actionProductList.setStatus(STATUS.ERROR))
            }

            if (data.message) {
                yield put(actionProductList.setError(data.message))
            }
        } catch (e) {
            yield put(actionProductList.setStatus(STATUS.ERROR))
            yield put(actionProductList.setError(e.message))
            console.log(e.message)
        }
    }
}

const productListSaga = function* () {
    yield all([sagaFetchProducts()])
}
export default productListSaga
