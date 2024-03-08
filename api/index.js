import express from "express";

import mongoose from "mongoose";
import dotenv from 'dotenv' ;//para configurar variable entorno

import userRouter from './routes/user.route.js';
import authRouter from "./routes/auth.route.js";


 dotenv.config();

//conectamos con la base de datos
mongoose
  .connect(
    'mongodb+srv://francodaviddev:MICHUCHA333777555@mern-blog.zxo4atv.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog'
  )
  .then(() => {
    console.log("MongoDb Is connected");
  }).catch((err)=>{
    console.log('Hubo un error',err)
  })

//creamos una api con express
const app = express();

app.use(express.json()); // para que se vea el cuerpo de la peticion en forma de json

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});


app.use('/api/user',userRouter)

app.use('/api/auth', authRouter)