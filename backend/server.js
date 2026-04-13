import express from 'express'
import cors from 'cors'

const app=express();
app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.json({operation:"success"})
})

app.post("/",(req,res)=>{
console.log(req.body)

res.json({message: "post success"})
})

app.listen(4000,()=>{
    console.log("port runninng at 4000")
})