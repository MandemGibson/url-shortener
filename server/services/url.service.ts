import { Url } from "../models/Url";
import { generateRandomShortCode } from "../utils/generateRandomShortCode";

export const createShortUrl = async (url: string) => {
  try {
    const shortCode = generateRandomShortCode();
    return await Url.create({ url, shortCode });
  } catch (error) {
    console.log("Error creating short url: ", error);
  }
};
