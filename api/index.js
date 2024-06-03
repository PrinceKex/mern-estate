import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import authRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose
  .connect(process.env.MONGO)
  // .connect(
  //   'mongodb+srv://ehigiatorukeke:M6tczRhLfTGFXQ70@cluster0.cvfftbm.mongodb.net/'
  // )
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()

app.use(express.json()) //body parser on the console

app.use(cookieParser()) //handle http cookies

app.listen(3000, () => {
  console.log('server running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
  // next()
})
