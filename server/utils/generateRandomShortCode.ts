import crypto from "crypto";
import { ObjectId } from "mongodb";
import { Url } from "../models/Url";

export const generateRandomShortCode = async (): Promise<string | null> => {
    let shortCode: string;
    let exists: { _id: ObjectId } | null;
  
    do {
      shortCode = crypto.randomBytes(4).toString("hex");
      exists = await Url.exists({ shortCode });
    } while (exists !== null);
  
    return shortCode;
  };