import { Product } from './main'

export interface Response<K extends string, T> {
    success: boolean
    data?: Record<K, T>
    message?: string | []
}

export type ResponseProductsList = Response<'products', Product[]>
export type ResponseProductItem = Response<'product', Product>
