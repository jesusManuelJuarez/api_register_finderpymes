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
exports.MysqlAddressRepository = void 0;
const Address_1 = require("../domain/Address");
const mysql_1 = require("../../database/mysql");
class MysqlAddressRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM address";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoAddress = Object.values(JSON.parse(JSON.stringify(info)));
                return infoAddress.map((address) => new Address_1.Address(address.idAddress, address.city, address.longitud, address.latitud, address.district, address.postalCode, address.cell, address.idData));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM address WHERE idAddress=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Address_1.Address(result[0].idAddress, result[0].city, result[0].longitud, result[0].latitud, result[0].district, result[0].postalCode, result[0].cell, result[0].idData);
            }
            catch (error) {
                return null;
            }
        });
    }
    createAddress(city, longitud, latitud, district, postalCode, cell, idData) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO address (city, longitud, latitud, district,postalCode,cell, idData) VALUES (?, ?, ?, ?, ? ,? ,?)";
            const params = [city, longitud, latitud, district, postalCode, cell, idData];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Address_1.Address(result.insertId, city, longitud, latitud, district, postalCode, cell, idData);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE address SET city = ?, longitud = ?, latitud = ?, district = ?,postalCode = ?,cell = ?, idData = ? WHERE idAddress = ?";
            const params = [
                newAddress.city || '',
                newAddress.longitud || '',
                newAddress.latitud || '',
                newAddress.district || '',
                newAddress.postalCode || '',
                newAddress.cell || '',
                newAddress.idData || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedAddress = new Address_1.Address(id, newAddress.city || '', newAddress.longitud || '', newAddress.latitud || '', newAddress.district || '', newAddress.postalCode || '', newAddress.cell || '', newAddress.idData || 0);
                return updatedAddress;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM address WHERE idAddress = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0;
            }
            catch (error) {
                return false; // Error en la eliminación
            }
        });
    }
}
exports.MysqlAddressRepository = MysqlAddressRepository;
