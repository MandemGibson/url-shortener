import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { urlRouter } from "./routes/url.route";
import { redirectToOriginalHandler } from "./controllers/url.controller";
config();

const uri = process.env.MONGO_URI as string;
const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api/urls/shorten", urlRouter);
app.use("/:shortCode", redirectToOriginalHandler);

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
