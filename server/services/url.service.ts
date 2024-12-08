import { Url } from "../models/Url";
import { generateRandomShortCode } from "../utils/generateRandomShortCode";

export const createShortUrl = async (url: string) => {
  try {
    const shortCode = await generateRandomShortCode();
    const newUrl = await Url.create({ url, shortCode });

    const { accessCount, ...result } = newUrl.toObject();
    return result;
  } catch (error) {
    console.log("Error creating short url: ", error);
  }
};

export const getAllShortUrl = async () => {
  try {
    return await Url.find({}, { accessCount: 0 });
  } catch (error) {
    console.log("Error getting all short urls: ", error);
  }
};

export const getAllShortUrlWithStats = async () => {
  try {
    return await Url.find();
  } catch (error) {
    console.log("Error getting all short urls: ", error);
  }
};

export const getShortUrlByOriginalUrl = async (url: string) => {
  try {
    return await Url.findOne({ url });
  } catch (error) {
    console.log("Error getting short url by original url: ", error);
  }
};

export const getShortUrl = async (shortCode: string) => {
  try {
    return await Url.findOneAndUpdate(
      { shortCode },
      { $inc: { accessCount: 1 } },
      { new: true, projection: { accessCount: 0 } }
    );
  } catch (error) {
    console.log("Error getting original url: ", error);
  }
};

export const getShortUrlWithStats = async (shortCode: string) => {
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
    return await Url.findOneAndUpdate(
      { shortCode },
      { url },
      { new: true, projection: { accessCount: 0 } }
    );
  } catch (error) {
    console.log("Error updating short url: ", error);
  }
};

export const deleteShortUrl = async (shortCode: string) => {
  try {
    return await Url.deleteOne({ shortCode });
  } catch (error) {
    console.log("Error deleting short url: ", error);
  }
};
