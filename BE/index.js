require('dotenv').config()
console.log(process.env.PORT)
const express = require('express')
const PORT =  process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())


app.listen(PORT,()=>(
    console.log("server is running on port "+PORT)
))