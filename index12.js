//router
import express from "express"
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"
import users from "./models/userModel.js"
import products from "./models/productModel.js"
const app = express()
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.get("/users", (req, res) => {
    res.send(users)
})
app.get("/products", (req, res) => {
    res.send(products)
})

app.listen(8080,()=>console.log("Server started"))