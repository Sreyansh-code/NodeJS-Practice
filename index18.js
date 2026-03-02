import express from 'express'
const app = express()
const PORT = process.argv[2]
app.listen(PORT, () => {
    console.log(`Server staretd in port number ${PORT}`)
})
app.get("/", (req, res) => {
    res.send(`This server is runnning in port number ${PORT}`)
})