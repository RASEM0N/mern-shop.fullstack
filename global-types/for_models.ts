import { ProductType } from './model'

export type OrderItemType = {
    name: string
    gty: number
    image: string
    price: number
    product: ProductType
}

export type ShippingAddressType = {
    address: string
    city: string
    postalCode: string
    country: string
}

export type PaymentResultType = {
    id: string
    status: string
    update_time: string
    email_address: string
}
