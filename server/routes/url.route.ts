import { Router } from "express";
import { createShortUrlHandler } from "../controllers/url.controller";

const urlRouter = Router();

urlRouter.post("/shorten", createShortUrlHandler);

export { urlRouter };
