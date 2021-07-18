import asyncHandler from '../middlewares/asyncHandler'
import ErrorResponse from '../utils/errorResponse'
import Product from '../models/product'
import { STATUS_CLIENT_ERROR } from '../types/status'

class ProductCtl {
    getAll = asyncHandler(async (req, res, next) => {
        const products = await Product.find()
        return res.json({
            success: true,
            data: {
                products,
            },
        })
    })

    getById = asyncHandler(async (req, res, next) => {
        const id = req.params.id

        const product = await Product.findById(id)

        if (!product) {
            throw new ErrorResponse('Resource not found', STATUS_CLIENT_ERROR.BAD)
        }

        return res.json({
            success: true,
            data: {
                product: product,
            },
        })
    })
}

const ProductController = new ProductCtl()
export default ProductController
