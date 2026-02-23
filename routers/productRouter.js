import express from 'express'

const productRouter = express.Router()

productRouter.get("/", (req, res) => {
    res.send("This is get request of productRouter")
})
productRouter.post("/", (req, res) => {
    res.send("This is post request of productRouter")
})

export default productRouter