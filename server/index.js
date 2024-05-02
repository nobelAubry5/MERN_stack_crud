import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 6000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Base de données connecté!!");
    app.listen(PORT, () => {
      console.log(`Serveur fonctionne au port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
