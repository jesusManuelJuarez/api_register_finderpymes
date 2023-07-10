"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DataRouter_1 = require("./data/infrastructure/DataRouter");
const FiscalRouter_1 = require("./fiscal/infrastructure/FiscalRouter");
const AddressRouter_1 = require("./address/infrastructure/AddressRouter");
const signale_1 = require("signale");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
// Rutas para los recursos de data fiscal, source y address
app.use("/data", DataRouter_1.dataRouter);
app.use("/fiscal", FiscalRouter_1.fiscalRouter);
app.use("/address", AddressRouter_1.addressRouter);
app.listen(3000, () => {
    signale.success("[Application] Server online on port 3000");
});
