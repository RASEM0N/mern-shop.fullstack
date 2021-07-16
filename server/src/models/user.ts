import { Document, Schema, model } from 'mongoose'
import { MODEL, UserModel } from '../types/main'

type UserModelDocumentType = UserModel & Document

const userSchema = new Schema<UserModelDocumentType>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

const User = model<UserModelDocumentType>(MODEL.USER, userSchema)
export default User
