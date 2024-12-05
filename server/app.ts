import express from "express";
import mongoose from "mongoose";
import { urlRouter } from "./routes/url.route";
const uri =
  "mongodb+srv://themaingib:aQuApyCCxf2v980x@urlshortener.uhshk.mongodb.net/url-shortener?retryWrites=true&w=majority&appName=urlshortener";

const app = express();
app.use(express.json());
app.use("/api/urls", urlRouter);

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongoDB");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to mongoDB: ", error);
  }
}

connectDB()
