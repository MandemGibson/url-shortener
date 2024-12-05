import {
  createShortUrl,
  deleteShortUrl,
  getOriginalUrl,
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
    if (!url) return res.status(400).json({ message: "Please provide url" });
    const newUrl = await createShortUrl(url);

    res.status(201).json({
      message: "URL shortened successfully",
      shortenUrl: `${req.headers.host}/${newUrl?.shortCode}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Error shortening url: ", error });
  }
};

export const redirectToOriginalUrl = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  try {
    const { shortCode } = req.params;
    if (!shortCode)
      return res.status(404).json({ message: "No short code found" });

    const url = await getOriginalUrl(shortCode);
    if (!url)
      return res
        .status(404)
        .json({ message: "No url found for this short code" });

    res.redirect(url.url);
  } catch (error) {
    res.status(500).json({ message: "Error redirecting url: ", error });
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
    res.status(200).json({
      message: "Updated shortened url successfully",
      shortenUrl: `${req.headers.host}/${updatedUrl?.shortCode}`,
    });
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

    await deleteShortUrl(shortCode);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting url: ", error });
  }
};
