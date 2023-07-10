"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
const dependencies_4 = require("./dependencies");
const dependencies_5 = require("./dependencies");
exports.addressRouter = express_1.default.Router();
exports.addressRouter.get("/", dependencies_2.getAllAddressController.run.bind(dependencies_2.getAllAddressController));
exports.addressRouter.get("/:idAddress", dependencies_3.getByIdAddressController.run.bind(dependencies_3.getByIdAddressController));
exports.addressRouter.post("/", dependencies_1.createAddressController.run.bind(dependencies_1.createAddressController));
exports.addressRouter.delete("/:idAddress", dependencies_4.deleteByIdAddressController.run.bind(dependencies_4.deleteByIdAddressController));
exports.addressRouter.put("/:idAddress", dependencies_5.updateByIdAddressController.run.bind(dependencies_5.updateByIdAddressController));
