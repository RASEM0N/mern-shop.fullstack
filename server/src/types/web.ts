import { ProductType } from './cart'

export interface Response<K extends string, T> {
    success: boolean
    data?: Record<K, T>
    message?: string
}

export type ResponseManyProducts = Response<'products', ProductType[]>
