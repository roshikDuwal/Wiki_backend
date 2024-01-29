import mongoose from "mongoose";

export const dbconnect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"BLOG"
    }).then((c)=>console.log(`Connected with ${c.connection.host}`)).catch((err)=>console.log(err))
}