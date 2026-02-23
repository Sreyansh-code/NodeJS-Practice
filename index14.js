import express from 'express'
import jwt from 'jsonwebtoken'
const SECRET = "lpu"
const app = express()
app.listen(8080, () => console.log("Server running"))
const user = {
    name: "Shrey",
    email: "shrey@gmail.com",
    role: "student"
}
const token = jwt.sign(user, SECRET, {expiresIn: "1h"})
console.log(token)
