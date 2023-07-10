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
exports.MysqlFiscalRepository = void 0;
const Fiscal_1 = require("../domain/Fiscal");
const mysql_1 = require("../../database/mysql");
class MysqlFiscalRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM fiscal";
            try {
                const [info] = yield (0, mysql_1.query)(sql, []);
                const infoFiscal = Object.values(JSON.parse(JSON.stringify(info)));
                return infoFiscal.map((fiscal) => new Fiscal_1.Fiscal(fiscal.idFiscal, fiscal.rfc, fiscal.regimeT, fiscal.fiscalAddress, fiscal.idData));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM fiscal WHERE idFiscal=?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Fiscal_1.Fiscal(result[0].idFiscal, result[0].rfc, result[0].regimeT, result[0].fiscalAddress, result[0].idData);
            }
            catch (error) {
                return null;
            }
        });
    }
    createFiscal(rfc, regimeT, fiscalAddress, idData) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO fiscal (rfc, regimeT, fiscalAddress,idData) VALUES (?, ?, ?, ?)";
            const params = [rfc, regimeT, fiscalAddress, idData];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Fiscal_1.Fiscal(result.insertId, rfc, regimeT, fiscalAddress, idData);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateById(id, newFiscal) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE fiscal SET rfc = ?, regimeT = ?, fiscalAddress = ?, idData = ? WHERE idFiscal = ?";
            const params = [
                newFiscal.rfc || '',
                newFiscal.regimeT || '',
                newFiscal.fiscalAddress || '',
                newFiscal.idData || '',
                id,
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows === 0) {
                    return null; // No se encontró el dato para actualizar
                }
                const updatedFiscal = new Fiscal_1.Fiscal(id, newFiscal.rfc || '', newFiscal.regimeT || '', newFiscal.fiscalAddress || '', newFiscal.idData || 0);
                return updatedFiscal;
            }
            catch (error) {
                return null; // Error en la actualización
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM fiscal WHERE idFiscal = ?";
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
exports.MysqlFiscalRepository = MysqlFiscalRepository;
