import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv' //para configurar variable entorno

 dotenv.config();

//conectamos con la base de datos
mongoose
  .connect(
    process.env.MONGODB
  )
  .then(() => {
    console.log("MongoDb Is connected");
  }).catch((err)=>{
    console.log('Hubo un error',err)
  })

//creamos una api con express
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
