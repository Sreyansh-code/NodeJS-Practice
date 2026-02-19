import express from 'express'
const app = express()
// app.get("/:name", (req, res) => {
//     res.send("Hello " + req.params.name)
// })
app.get("/", (req, res) => {
    res.send("Hello " + req.query.name + req.query.age)           // http://localhost:8080/?name=shrey&age=21 this should be the route 
}).listen(8080)