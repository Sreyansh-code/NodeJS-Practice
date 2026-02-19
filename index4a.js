import express from 'express'
const app = express()

app.get("/:num1/:num2", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const sum = Number(req.params.num1) + Number(req.params.num2)
    res.send(sum)
})

app.get("/x/:num1/y/:num2", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const sum = Number(req.params.num1) + Number(req.params.num2)
    res.send(sum)
})
app.listen(8080)