import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import postRouter from "./routes/post.js"


export const app = express()


dotenv.config({
    path:"./database/config.env"
})

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST","PUT","GET","DELETE"],
    credentials:true
}))

app.use("/api/v1/",postRouter)