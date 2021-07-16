import { OrderType, ProductType, ReviewType, UserType } from '../../../types_global/model'

export enum MODEL {
    PRODUCT = 'Product',
    REVIEW = 'Review',
    USER = 'User',
    ORDER = 'Order',
}

export interface ProductModel extends ProductType {}

export interface Review extends ReviewType {}

export interface UserModel extends UserType {}

export interface OrderModel extends OrderType {}