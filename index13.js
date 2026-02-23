import express from 'express'
import bcrypt from 'bcrypt'
const app = express()
app.use(express.json())
app.listen(8080)
const users = []
app.post("/signup", async(req, res) => {
    const body = req.body
    const hashPassword = await bcrypt.hash(body.password, 10)
    body.password = hashPassword
    users.push(body)
    res.json(users)
})
app.post("/login", (req, res) => {
    const {email, password} = req.body
    const found = users.find((user) => user.email === email)
    if(found){
        const chkPassword = bcrypt.compare(password, found.password)
        if(chkPassword){
            res.status(200).json({message: "Success"})
        }
        else{
            res.status(401).json({message: "Incorrect password"})
        }
    }
    else{
        res.status(401).send("User not found")
    }
    

})
app.get("/users", (req, res) => {
    res.json(users)
})