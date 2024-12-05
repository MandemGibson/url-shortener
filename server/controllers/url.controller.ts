import { createShortUrl } from "./../services/url.service";
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

    res
      .status(201)
      .json({
        message: "URL shortened successfully",
        shortenUrl: `${req.headers.host}/${newUrl?.shortCode}`,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal error: ", error });
  }
};
