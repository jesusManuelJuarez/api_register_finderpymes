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
exports.MysqlDataRepository = void 0;
const Data_1 = require("../domain/Data");
const mysql_1 = require("../../database/mysql");
class MysqlDataRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM data";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoData = Object.values(JSON.parse(JSON.stringify(info)));
                return infoData.map((data) => new Data_1.Data(data.idData, data.name, data.description, data.type, data.website, data.idUser));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM data WHERE idData=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Data_1.Data(result[0].idData, result[0].name, result[0].description, result[0].type, result[0].website, result[0].idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    createData(name, description, type, website, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO data (name, description, type, website, idUser) VALUES (?, ?, ?, ?, ?)";
            const params = [name, description, type, website, idUser];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Data_1.Data(result.insertId, name, description, type, website, idUser);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE data SET name = ?, description = ?, type = ?, website = ?, idUser = ? WHERE idData = ?";
            const params = [
                newData.name || '',
                newData.description || '',
                newData.type || '',
                newData.website || '',
                newData.idUser || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedData = new Data_1.Data(id, newData.name || '', newData.description || '', newData.type || '', newData.website || '', newData.idUser || 0);
                return updatedData;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM data WHERE idData = ?";
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
exports.MysqlDataRepository = MysqlDataRepository;
