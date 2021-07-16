require('dotenv').config({
    path: './src/.env',
})
import productRouter from './routes/product'
import { Application } from 'express'
import * as morgan from 'morgan'
import * as cors from 'cors'
import connectToDB from './db'
import errorHandler from './middlewares/errorHandler'

// ----- START -----
const express = require('express')
const app: Application = express()
connectToDB().catch((e) => console.log(`ERROR ${e.message}`))

// --- MIDDLEWARES ---
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// ----- ROUTES -----
app.use('/api/product', productRouter)

// --- BUG CATCHER ----
app.use(errorHandler)

// ---- .... ----
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON A ${PORT}`)
})
process.on('unhandledRejection', (err, _) => {
    console.log(`ERROR: ${err}`)
    server.close(() => process.exit(1))
})
