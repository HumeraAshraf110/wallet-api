 import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";             // config folder src ke andar hai
import rateLimiter from "./middleware/rateLimiter.js"; // middleware folder src ke andar hai
import transactionsRoute from "./routes/transactionsRoute.js"; // routes folder src ke andar hai


dotenv.config();

const app = express();
//middleware
app.use(rateLimiter);
app.use(express.json());
//our custom simple middleware
// app.use((req,res,next)=>{
//     console.log("Hey we hit a req,the method is ",req.method);
//     next();
// });
const PORT = process.env.PORT || 5001;

 

app.get("/",(req, res)=>{
    res.send("it's working");
});
app.use("/api/transactions",transactionsRoute);
 

initDB().then(() =>{ 
app.listen(5001,()=>{
    console.log("Server is up and running on PORT:",PORT)
});
});