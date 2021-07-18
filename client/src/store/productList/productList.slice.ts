import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, STATUS } from '../../types/main'

export interface ProductListInitialState {
    status: STATUS
    error: null | string | []
    products: Product[]
}

const initialState: ProductListInitialState = {
    status: STATUS.NEVER,
    error: null,
    products: [],
}

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<STATUS>) => {
            const status = action.payload
            state.status = status
            if (STATUS.LOADING === status) {
                state.products = []
            }
            if (STATUS.ERROR !== status) {
                state.error = null
            }
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },

        setError: (state, action: PayloadAction<string | [] | null>) => {
            state.error = action.payload
        },
    },
})

export default productListSlice.reducer
export const { actions: actionProductList } = productListSlice
