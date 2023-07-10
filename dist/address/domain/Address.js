"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(idAddress, city, longitud, latitud, district, //new
    postalCode, cell, //new
    idData) {
        this.idAddress = idAddress;
        this.city = city;
        this.longitud = longitud;
        this.latitud = latitud;
        this.district = district;
        this.postalCode = postalCode;
        this.cell = cell;
        this.idData = idData;
    }
}
exports.Address = Address;
