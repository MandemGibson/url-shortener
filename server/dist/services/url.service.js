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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShortUrl = exports.updateShortUrl = exports.getShortUrlWithStats = exports.getShortUrl = exports.getAllShortUrlWithStats = exports.getAllShortUrl = exports.createShortUrl = void 0;
const Url_1 = require("../models/Url");
const generateRandomShortCode_1 = require("../utils/generateRandomShortCode");
const createShortUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortCode = yield (0, generateRandomShortCode_1.generateRandomShortCode)();
        const newUrl = yield Url_1.Url.create({ url, shortCode });
        const _a = newUrl.toObject(), { accessCount } = _a, result = __rest(_a, ["accessCount"]);
        return result;
    }
    catch (error) {
        console.log("Error creating short url: ", error);
    }
});
exports.createShortUrl = createShortUrl;
const getAllShortUrl = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.find({}, { accessCount: 0 });
    }
    catch (error) {
        console.log("Error getting all short urls: ", error);
    }
});
exports.getAllShortUrl = getAllShortUrl;
const getAllShortUrlWithStats = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.find();
    }
    catch (error) {
        console.log("Error getting all short urls: ", error);
    }
});
exports.getAllShortUrlWithStats = getAllShortUrlWithStats;
const getShortUrl = (shortCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.findOneAndUpdate({ shortCode }, { $inc: { accessCount: 1 } }, { new: true, projection: { accessCount: 0 } });
    }
    catch (error) {
        console.log("Error getting original url: ", error);
    }
});
exports.getShortUrl = getShortUrl;
const getShortUrlWithStats = (shortCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.findOneAndUpdate({ shortCode }, { $inc: { accessCount: 1 } }, { new: true });
    }
    catch (error) {
        console.log("Error getting original url: ", error);
    }
});
exports.getShortUrlWithStats = getShortUrlWithStats;
const updateShortUrl = (url, shortCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.findOneAndUpdate({ shortCode }, { url }, { new: true, projection: { accessCount: 0 } });
    }
    catch (error) {
        console.log("Error updating short url: ", error);
    }
});
exports.updateShortUrl = updateShortUrl;
const deleteShortUrl = (shortCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Url_1.Url.deleteOne({ shortCode });
    }
    catch (error) {
        console.log("Error deleting short url: ", error);
    }
});
exports.deleteShortUrl = deleteShortUrl;
