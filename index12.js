// router

import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
const app = express()
app.listen(8080, () => console.log("Server started"))
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)