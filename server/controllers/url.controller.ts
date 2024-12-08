import { Url } from "../models/Url";
import {
  createShortUrl,
  deleteShortUrl,
  getAllShortUrl,
  getAllShortUrlWithStats,
  getShortUrl,
  getShortUrlByOriginalUrl,
  getShortUrlWithStats,
  updateShortUrl,
} from "./../services/url.service";
import { Request, Response, NextFunction } from "express";

export const createShortUrlHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { url } = req.body;
    if (!url || url === "")
      return res.status(400).json({ message: "Please provide url" });

    const existingUrl = await getShortUrlByOriginalUrl(url)
    if (existingUrl) {
      return res.status(200).json(existingUrl);
      }

    const newUrl = await createShortUrl(url);

    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: "Error shortening url: ", error });
  }
};

export const getAllShortUrlsHandler = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const shortUrls = await getAllShortUrl();
    if (!shortUrls?.length)
      return res.status(404).json({ message: "No short urls found" });
    res.status(200).json(shortUrls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all short urls: ", error });
  }
};

export const getAllShortUrlsWithStatsHandler = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const shortUrls = await getAllShortUrlWithStats();
    if (!shortUrls?.length)
      return res.status(404).json({ message: "No short urls found" });
    res.status(200).json(shortUrls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all short urls: ", error });
  }
};

export const getShortUrlHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { shortCode } = req.params;
    if (!shortCode)
      return res.status(404).json({ message: "No short code found" });

    const url = await getShortUrl(shortCode);
    if (!url)
      return res
        .status(404)
        .json({ message: "No url found for this short code" });

    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ message: "Error getting url: ", error });
  }
};

export const getShortUrlWithStatsHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { shortCode } = req.params;
    if (!shortCode)
      return res.status(404).json({ message: "No short code found" });

    const url = await getShortUrlWithStats(shortCode);
    if (!url)
      return res
        .status(404)
        .json({ message: "No url found for this short code" });

    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ message: "Error getting url: ", error });
  }
};

export const updateShortUrlHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { shortCode } = req.params;
    const { url } = req.body;
    if (!shortCode || !url)
      return res
        .status(400)
        .json({ message: "Both short code and url must required" });

    const updatedUrl = await updateShortUrl(url, shortCode);
    res.status(200).json(updatedUrl);
  } catch (error) {
    res.status(500).json({ message: "Error updating url: ", error });
  }
};

export const deleteShortUrlHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { shortCode } = req.params;
    if (!shortCode)
      return res.status(404).json({ message: "No short code found" });

    const deletedShortUrl = await deleteShortUrl(shortCode);

    if (deletedShortUrl?.deletedCount === 0)
      return res.status(400).json({
        message: "Invalid short code. Try again",
      });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting url: ", error });
  }
};

export const redirectToOriginalHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  const { shortCode } = req.params;

  try {
    const urlEntry = await getShortUrl(shortCode);
    if (!urlEntry) {
      return res.status(404).send("Short URL not found.");
    }

    res.redirect(urlEntry.url);
  } catch (error) {
    console.error("Error during redirection:", error);
    res.status(500).send("Server error.");
  }
};
