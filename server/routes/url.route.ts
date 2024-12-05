import { Router } from "express";
import {
  createShortUrlHandler,
  deleteShortUrlHandler,
  redirectToOriginalUrl,
  updateShortUrlHandler,
} from "../controllers/url.controller";

const urlRouter = Router();

urlRouter.route("/").post(createShortUrlHandler);
urlRouter
  .route("/:shortCode")
  .get(redirectToOriginalUrl)
  .put(updateShortUrlHandler)
  .delete(deleteShortUrlHandler);

export { urlRouter };
