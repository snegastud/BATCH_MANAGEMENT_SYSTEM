import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import connectDb from "./config/db.js";
import render from './routes/userRoutes.js';
dotenv.config()
connectDb()


const app = express()

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT ||   5000 
app.use('/api',render);
app.listen(PORT,()=>{

  console.log(`server connected successfully http://localhost:${PORT}`);
  

})


