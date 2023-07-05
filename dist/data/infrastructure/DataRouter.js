"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
const dependencies_4 = require("./dependencies");
const dependencies_5 = require("./dependencies");
exports.dataRouter = express_1.default.Router();
exports.dataRouter.get("/", dependencies_2.getAllDataController.run.bind(dependencies_2.getAllDataController));
exports.dataRouter.get("/:idData", dependencies_3.getByIdDataController.run.bind(dependencies_3.getByIdDataController));
exports.dataRouter.post("/", dependencies_1.createDataController.run.bind(dependencies_1.createDataController));
exports.dataRouter.delete("/:idData", dependencies_4.deleteByIdDataController.run.bind(dependencies_4.deleteByIdDataController));
exports.dataRouter.put("/:idData", dependencies_5.updateByIdDataController.run.bind(dependencies_5.updateByIdDataController));
