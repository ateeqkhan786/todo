import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/db.js'
import todoroutes from './routes/todo.route.js'
import bodyParser from 'body-parser'


const app = express()
app.use(bodyParser.json())
const Port = process.env.PORT || 3000


app.use('/task',todoroutes)



app.listen(Port,()=>{
    console.log(`server is running on the port ${Port}`)
    connectDb()
})