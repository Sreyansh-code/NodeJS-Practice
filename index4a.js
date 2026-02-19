import express from 'express'
const app = express()
app.get("/:id1/:id2", (req, res) => {
    const sum = Number(req.params.id1) + Number(req.params.id2)
    res.send(sum)
})
app.listen(8080)