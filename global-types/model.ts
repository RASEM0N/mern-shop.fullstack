import { OrderItemType, PaymentResultType, ShippingAddressType } from './for_models'

export type ProductType = {
    _id: string
    user: UserType
    name: string
    image: string
    brand: string
    category: string
    description: string
    review: ReviewType[]
    rating: number
    numReviews: number
    price: number
    countInStock: number
}

export type ReviewType = {
    name: string
    rating: number
    comment: string
}

export type UserType = {
    _id: string
    name: string
    email: string
    password: string
    isAdmin: boolean
}

export type OrderType = {
    _id: string
    user: UserType
    orderItem: OrderItemType
    shippingAddress: ShippingAddressType
    paymentMethod: string
    paymentResult: PaymentResultType
    taxPrice: number
    shippingPrice: number
    totalPrice: number
    isPaid: boolean
    isDelivered: boolean
    paidAt: Date
    deliveredAt: Date
}
