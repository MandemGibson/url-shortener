"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRouter = void 0;
const express_1 = require("express");
const url_controller_1 = require("../controllers/url.controller");
const urlRouter = (0, express_1.Router)();
exports.urlRouter = urlRouter;
urlRouter.route("/").get(url_controller_1.getAllShortUrlsHandler).post(url_controller_1.createShortUrlHandler);
urlRouter.get("/stats", url_controller_1.getAllShortUrlsWithStatsHandler);
urlRouter
    .route("/:shortCode")
    .get(url_controller_1.getShortUrlHandler)
    .put(url_controller_1.updateShortUrlHandler)
    .delete(url_controller_1.deleteShortUrlHandler);
urlRouter.get("/:shortCode/stats", url_controller_1.getShortUrlWithStatsHandler);
