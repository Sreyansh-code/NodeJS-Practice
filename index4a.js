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

app.get("/x/:num1/y/:num2/z/:num3", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const sum = Number(req.params.num1) + Number(req.params.num2) + Number(req.params.num3)
    res.send(sum)
})

app.get("/:w/:x/:y/:z", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send("Hello Students")
})

app.listen(8080, () => {
    console.log("server started");
})