import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()
const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hyZXkiLCJlbWFpbCI6InNocmV5QGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzcxODMzOTA4LCJleHAiOjE3NzE4Mzc1MDh9.1heHjClURkYaiZQrhYrStHTevYyFqOSFfsbctp7FTeA"
const user = jwt.verify(token, SECRET)
console.log(user);
