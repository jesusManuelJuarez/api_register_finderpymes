import { Data } from "../domain/Data";
import { DataRepository } from "../domain/DataRepository";
import { query } from "../../database/mysql";

export class MysqlDataRepository implements DataRepository {

  async getAll(): Promise<Data[] | null> {
    const sql = "SELECT * FROM data";
    try {
      const [info]: any = await query(sql, []);
      const infoData = Object.values(JSON.parse(JSON.stringify(info)));

      return infoData.map(
        (data: any) =>
          new Data(
            data.idData,
            data.name,
            data.description,
            data.type,
            data.website,
            data.idUser
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Data | null> {
    const sql = "SELECT * FROM data WHERE idData=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Data(
        result[0].idData,
        result[0].name,
        result[0].description,
        result[0].type,
        result[0].website,
        result[0].idUser
      );
    } catch (error) {
      return null;
    }
  }

  async createData(
    name: string,
    description: string,
    type: string,
    website: string,
    idUser: number
  ): Promise<Data | null> {
    const sql =
      "INSERT INTO data (name, description, type, website, idUser) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [name, description, type, website, idUser];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Data(result.insertId, name, description, type, website, idUser);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newData: Partial<Data>): Promise<Data | null> {
    const sql =
      "UPDATE data SET name = ?, description = ?, type = ?, website = ?, idUser = ? WHERE idData = ?";
    const params: any[] = [
      newData.name || '', // Si newData.name es undefined, se asigna una cadena vacía
      newData.description || '', // Si newData.description es undefined, se asigna una cadena vacía
      newData.type || '', // Si newData.type es undefined, se asigna una cadena vacía
      newData.website || '', // Si newData.website es undefined, se asigna una cadena vacía
      newData.idUser || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedData = new Data(
        id,
        newData.name || '',
        newData.description || '',
        newData.type || '',
        newData.website || '',
        newData.idUser || 0
      );
      return updatedData;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM data WHERE idData = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
