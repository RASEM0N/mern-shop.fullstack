import { OrderType, ProductType, UserType } from '../../../global-types/model'

export interface Product extends ProductType {}

export interface Order extends OrderType {}

export interface User extends UserType {}

export enum STATUS {
    NEVER = 'never',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
