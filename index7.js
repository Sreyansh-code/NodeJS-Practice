import express from 'express'
const app = express()
app.get("/", (req, res) => {
    const user = {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        role: "student"
    }
    res.json(user)
}).listen(8080)