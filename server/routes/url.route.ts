import { Router } from "express";
import {
  createShortUrlHandler,
  deleteShortUrlHandler,
  getAllShortUrlsHandler,
  getAllShortUrlsWithStatsHandler,
  getShortUrlHandler,
  getShortUrlWithStatsHandler,
  updateShortUrlHandler,
} from "../controllers/url.controller";

const urlRouter = Router();

urlRouter.route("/").get(getAllShortUrlsHandler).post(createShortUrlHandler);
urlRouter.get("/stats", getAllShortUrlsWithStatsHandler);
urlRouter
  .route("/:shortCode")
  .get(getShortUrlHandler)
  .put(updateShortUrlHandler)
  .delete(deleteShortUrlHandler);
urlRouter.get("/:shortCode/stats", getShortUrlWithStatsHandler);

export { urlRouter };
