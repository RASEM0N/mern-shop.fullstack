import { Request, Response, Application } from 'express'
import * as morgan from 'morgan'

require('dotenv').config({
    path: './src/.env',
})

// ----- START -----
const express = require('express')
const app: Application = express()

// --- MIDDLEWARES ---
app.use(express.json())
app.use(morgan('dev'))

// ----- ROUTES -----
app.get('/', (_: Request, res: Response) => {
    res.send('Найс')
})

// ---- .... ----
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON A ${PORT}`)
})
process.on('unhandledRejection', (err, _) => {
    console.log(`ERROR: ${err}`)
    server.close(() => process.exit(1))
})
