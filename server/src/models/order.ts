import { Document, Schema, model } from 'mongoose'
import { MODEL, OrderModel } from '../types/main'

type OrderModelDocumentType = OrderModel & Document

const orderSchema = new Schema<OrderModelDocumentType>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: MODEL.USER,
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: MODEL.PRODUCT,
                },
            },
        ],
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
)

const Order = model<OrderModelDocumentType>(MODEL.ORDER, orderSchema)
export default Order
