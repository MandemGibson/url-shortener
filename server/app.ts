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

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to mongoDB: ", error);
    process.exit(1);
  } 
}

connectDB();
