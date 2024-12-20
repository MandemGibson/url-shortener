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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomShortCode = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Url_1 = require("../models/Url");
const generateRandomShortCode = () => __awaiter(void 0, void 0, void 0, function* () {
    let shortCode;
    let exists;
    do {
        shortCode = crypto_1.default.randomBytes(4).toString("hex");
        exists = yield Url_1.Url.exists({ shortCode });
    } while (exists !== null);
    return shortCode;
});
exports.generateRandomShortCode = generateRandomShortCode;
