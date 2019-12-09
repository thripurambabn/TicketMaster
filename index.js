const express=require('express')
const routes=require('./config/routes')
const connectDB=require('./config/database')
const app=express()
port=3031

app.use(express.json())
app.use('/',routes)
connectDB()
app.listen(port,()=>{
    console.log('connected to db',port)
})