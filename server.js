const express = require ('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')



//dotenv configuration
dotenv.config()
//rest object
const app = express()

//midlewares
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, './seffcon/build')))

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname, './seffcon/build/index.html'))
})

const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`server Running on PORT ${PORT}`)
})