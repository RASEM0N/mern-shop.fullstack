import { Product } from './main'

export interface Response<K extends string, T> {
    success: boolean
    data?: Record<K, T>
    message?: string
}

export type ResponseManyProducts = Response<'products', Product[]>
export type ResponseProduct = Response<'product', Product>
