import { Request, Response, NextFunction } from 'express'
import ErrorResponse from '../utils/errorResponse'
import { STATUS_CLIENT_ERROR } from '../types/status'

const errorHandler = (err: any, req: Request, res: Response, _: NextFunction) => {
    const error = { ...err }
    error.message = err.message

    if (error.kind === 'ObjectId') {
        error.message = 'Resource not found'
    }

    return res.status(error.statusCode || STATUS_CLIENT_ERROR.BAD).json({
        success: false,
        message: error.message,
    })
}

export default errorHandler
