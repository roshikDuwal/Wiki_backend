import { app } from "./app.js";
import { dbconnect } from "./database/db.js";

dbconnect();

app.listen(process.env.PORT ||3000,()=>{
    console.log(`Connected to port ${process.env.PORT}`);
})