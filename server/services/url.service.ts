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

export const getOriginalUrl = async (shortCode: string) => {
  try {
    return await Url.findOneAndUpdate(
      { shortCode },
      { $inc: { accessCount: 1 } },
      { new: true }
    );
  } catch (error) {
    console.log("Error getting original url: ", error);
  }
};

export const updateShortUrl = async (url: string, shortCode: string) => {
  try {
    return await Url.findOneAndUpdate({ shortCode }, { url }, { new: true });
  } catch (error) {
    console.log("Error updating short url: ", error);
  }
};

export const deleteShortUrl = async (shortCode: string) => {
  try {
    await Url.deleteOne({ shortCode });
  } catch (error) {
    console.log("Error deleting short url: ", error);
  }
};
