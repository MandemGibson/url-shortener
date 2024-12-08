"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToOriginalHandler = exports.deleteShortUrlHandler = exports.updateShortUrlHandler = exports.getShortUrlWithStatsHandler = exports.getShortUrlHandler = exports.getAllShortUrlsWithStatsHandler = exports.getAllShortUrlsHandler = exports.createShortUrlHandler = void 0;
const url_service_1 = require("./../services/url.service");
const createShortUrlHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.body;
        if (!url || url === "")
            return res.status(400).json({ message: "Please provide url" });
        const existingUrl = yield (0, url_service_1.getShortUrlByOriginalUrl)(url);
        if (existingUrl) {
            return res.status(200).json(existingUrl);
        }
        const newUrl = yield (0, url_service_1.createShortUrl)(url);
        res.status(201).json(newUrl);
    }
    catch (error) {
        res.status(500).json({ message: "Error shortening url: ", error });
    }
});
exports.createShortUrlHandler = createShortUrlHandler;
const getAllShortUrlsHandler = (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrls = yield (0, url_service_1.getAllShortUrl)();
        if (!(shortUrls === null || shortUrls === void 0 ? void 0 : shortUrls.length))
            return res.status(404).json({ message: "No short urls found" });
        res.status(200).json(shortUrls);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching all short urls: ", error });
    }
});
exports.getAllShortUrlsHandler = getAllShortUrlsHandler;
const getAllShortUrlsWithStatsHandler = (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrls = yield (0, url_service_1.getAllShortUrlWithStats)();
        if (!(shortUrls === null || shortUrls === void 0 ? void 0 : shortUrls.length))
            return res.status(404).json({ message: "No short urls found" });
        res.status(200).json(shortUrls);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching all short urls: ", error });
    }
});
exports.getAllShortUrlsWithStatsHandler = getAllShortUrlsWithStatsHandler;
const getShortUrlHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortCode } = req.params;
        if (!shortCode)
            return res.status(404).json({ message: "No short code found" });
        const url = yield (0, url_service_1.getShortUrl)(shortCode);
        if (!url)
            return res
                .status(404)
                .json({ message: "No url found for this short code" });
        res.status(200).json(url);
    }
    catch (error) {
        res.status(500).json({ message: "Error getting url: ", error });
    }
});
exports.getShortUrlHandler = getShortUrlHandler;
const getShortUrlWithStatsHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortCode } = req.params;
        if (!shortCode)
            return res.status(404).json({ message: "No short code found" });
        const url = yield (0, url_service_1.getShortUrlWithStats)(shortCode);
        if (!url)
            return res
                .status(404)
                .json({ message: "No url found for this short code" });
        res.status(200).json(url);
    }
    catch (error) {
        res.status(500).json({ message: "Error getting url: ", error });
    }
});
exports.getShortUrlWithStatsHandler = getShortUrlWithStatsHandler;
const updateShortUrlHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortCode } = req.params;
        const { url } = req.body;
        if (!shortCode || !url)
            return res
                .status(400)
                .json({ message: "Both short code and url must required" });
        const updatedUrl = yield (0, url_service_1.updateShortUrl)(url, shortCode);
        res.status(200).json(updatedUrl);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating url: ", error });
    }
});
exports.updateShortUrlHandler = updateShortUrlHandler;
const deleteShortUrlHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortCode } = req.params;
        if (!shortCode)
            return res.status(404).json({ message: "No short code found" });
        const deletedShortUrl = yield (0, url_service_1.deleteShortUrl)(shortCode);
        if ((deletedShortUrl === null || deletedShortUrl === void 0 ? void 0 : deletedShortUrl.deletedCount) === 0)
            return res.status(400).json({
                message: "Invalid short code. Try again",
            });
        res.status(200).json({ message: "Deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting url: ", error });
    }
});
exports.deleteShortUrlHandler = deleteShortUrlHandler;
const redirectToOriginalHandler = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortCode } = req.params;
    try {
        const urlEntry = yield (0, url_service_1.getShortUrl)(shortCode);
        if (!urlEntry) {
            return res.status(404).send("Short URL not found.");
        }
        res.redirect(urlEntry.url);
    }
    catch (error) {
        console.error("Error during redirection:", error);
        res.status(500).send("Server error.");
    }
});
exports.redirectToOriginalHandler = redirectToOriginalHandler;
