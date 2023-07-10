"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fiscalRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
const dependencies_4 = require("./dependencies");
const dependencies_5 = require("./dependencies");
exports.fiscalRouter = express_1.default.Router();
exports.fiscalRouter.get("/", dependencies_2.getAllFiscalController.run.bind(dependencies_2.getAllFiscalController));
exports.fiscalRouter.get("/:idFiscal", dependencies_3.getByIdFiscalController.run.bind(dependencies_3.getByIdFiscalController));
exports.fiscalRouter.post("/", dependencies_1.createFiscalController.run.bind(dependencies_1.createFiscalController));
exports.fiscalRouter.delete("/:idFiscal", dependencies_4.deleteByIdFiscalController.run.bind(dependencies_4.deleteByIdFiscalController));
exports.fiscalRouter.put("/:idFiscal", dependencies_5.updateByIdFiscalController.run.bind(dependencies_5.updateByIdFiscalController));
