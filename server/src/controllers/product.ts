import asyncHandler from '../middlewares/asyncHandler'
import products from '../mocks/products'
import ErrorResponse from '../utils/errorResponse'

class Product {
    getAll = asyncHandler((req, res, next) => {
        return res.json({
            success: true,
            data: {
                products,
            },
        })
    })

    getById = asyncHandler((req, res, next) => {
        const product = products.find((p) => p._id === req.params.id)

        if (!product) {
            return next(new ErrorResponse('Product not found', 400))
        }

        return res.json({
            success: true,
            data: {
                product,
            },
        })
    })
}

const ProductController = new Product()
export default ProductController
