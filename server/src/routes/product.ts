import { Router } from 'express'
import ProductController from '../controllers/product'

const productRouter = Router()

productRouter.route('/').get(ProductController.getAll)
productRouter.route('/:id').get(ProductController.getById)

export default productRouter
