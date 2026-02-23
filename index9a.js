// import express from 'express'
// const app = express()

// const auth = (req, res, next) => {
//     if(req.url === "/1234"){
//         next()
//     }else{
//         res.send('access denied')
//     }
// }

// app.use(auth)

// app.get("/1234", (req, res) => {
//     res.send("welcome")
// })

// app.listen(8080, () => {
//     console.log("server started");
// })




// import express from 'express'
// const app = express()
// app.use(express.json())

// const auth = (req, res, next) => {
//     if(req.body.token === 1234){
//         next()
//     }else{
//         res.send('access denied')
//     }
// }

// app.use(auth)

// app.post("/", (req, res) => {
//     res.send("welcome")
// })

// app.listen(8080, () => {
//     console.log("server started");
// })




// import express from 'express'
// const app = express()
// app.use(express.json())

// const auth = (req, res, next) => {
//     const authHeader = req.headers.authorization
//     const token = authHeader.split(" ")[1]

//     if(token === "1234"){
//         next()
//     }else{
//         res.send('access denied')
//     }
// }

// app.use(auth)

// app.get("/", (req, res) => {
//     res.send("welcome")
// })

// app.listen(8080, () => {
//     console.log("server started");
// })



// import express from 'express'
// const app = express()
// app.use(express.json())

// const token = Math.round(Math.random()*10).toString()

// const auth = (req, res, next) => {
//     const authHeader = req.headers.authorization
//     const val = authHeader.split(" ")
//     if(val[1] === token){
//         next()
//     }else{
//         res.send('access denied')
//     }
// }

// app.post("/login", (req, res) => {
//     res.send(token)
// })

// app.get("/", auth, (req, res) => {
//     res.send("welcome")
// })

// app.listen(8080, () => {
//     console.log("server started");
// })




import express from 'express'
const app = express()
app.use(express.json())

const token = Math.round(Math.random()*10).toString()

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    const val = authHeader.split(" ")
    if(val[1] === token){
        next()
    }else{
        res.send('access denied')
    }
}

app.post("/login", (req, res) => {
    
    res.send(token)
})

app.get("/", auth, (req, res) => 
    res.send("welcome")
})

app.listen(8080, () => {
    console.log("server started");
})