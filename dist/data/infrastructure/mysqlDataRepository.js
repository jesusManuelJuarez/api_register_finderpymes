"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataRepository = void 0;
const Data_1 = require("../domain/Data");
const mysql_1 = require("../../database/mysql");
class MysqlDataRepository {
    getAll() {
        const sql = "SELECT * FROM data";
        return (0, mysql_1.query)(sql, []);
    }
    getById(id) {
        const sql = "SELECT * FROM data WHERE idData = ?";
        return (0, mysql_1.query)(sql, [id]).then((result) => {
            if (result.length === 0) {
                return null;
            }
            const dataRow = result[0];
            const data = new Data_1.Data(dataRow.idData, dataRow.name, dataRow.description, dataRow.type, dataRow.website, dataRow.idUser);
            return data;
        });
    }
    create(data) {
        const sql = "INSERT INTO data (name, description, type, website, idUser) VALUES (?, ?, ?, ?, ?)";
        const params = [data.name, data.description, data.type, data.website, data.idUser];
        return (0, mysql_1.query)(sql, params).then((result) => {
            const insertedId = result.insertId;
            return new Data_1.Data(insertedId, data.name, data.description, data.type, data.website, data.idUser);
        });
    }
    updateById(id, data) {
        const sql = "UPDATE data SET name = ?, description = ?, type = ?, website = ?, idUser = ? WHERE idData = ?";
        const params = [data.name, data.description, data.type, data.website, data.idUser, id];
        return (0, mysql_1.query)(sql, params).then(() => {
            return this.getById(id);
        });
    }
    deleteById(id) {
        const sql = "DELETE FROM data WHERE idData = ?";
        return (0, mysql_1.query)(sql, [id]).then(() => {
            return true;
        });
    }
}
exports.MysqlDataRepository = MysqlDataRepository;
