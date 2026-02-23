import express from 'express'

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("This is get request of userRouter")
})
userRouter.post("/", (req, res) => {
    res.send("This is post request of userRouter")
})

export default userRouter  