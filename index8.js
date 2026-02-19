import express from 'express'
const app = express()
const user = [{
        id: 1,
        name: "John",
        email: "john@gmail.com",
        role: "student"
    },
    {
        id: 2,
        name: "Cathy",
        email: "cathy@gmail.com",
        role: "student"
    },
    {
        id: 3,
        name: "Mike",
        email: "mike@gmail.com",
        role: "admin"
}]
app.get("/", (req, res) => {
    res.json(user)
}).listen(8080)