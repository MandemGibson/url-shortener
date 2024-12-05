import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import { urlRouter } from "./routes/url.route";
config();

const uri = process.env.MONGO_URI as string;

const app = express();
app.use(express.json());
app.use("/api/urls/shorten", urlRouter);

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

connectDB();
