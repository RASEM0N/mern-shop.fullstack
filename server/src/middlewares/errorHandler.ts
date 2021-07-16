import { Request, Response, NextFunction } from 'express'
import ErrorResponse from '../utils/errorResponse'

const errorHandler = (err: ErrorResponse, req: Request, res: Response, _: NextFunction) => {
    const error = { ...err }
    error.message = err.message

    return res.status(error.statusCode || 400).json({
        success: false,
        message: error.message,
    })
}

export default errorHandler
