import { Fiscal } from "../domain/Fiscal";
import { FiscalRepository } from "../domain/FiscalRepository";
import { query } from "../../database/mysql";

export class MysqlFiscalRepository implements FiscalRepository {

  async getAll(): Promise<Fiscal[] | null> {
    const sql = "SELECT * FROM fiscal";
    try {
      const [info]: any = await query(sql, []);
      const infoFiscal = Object.values(JSON.parse(JSON.stringify(info)));

      return infoFiscal.map(
        (fiscal: any) =>
          new Fiscal(
            fiscal.idFiscal,
            fiscal.rfc,
            fiscal.regimeT,
            fiscal.fiscalAddress,
            fiscal.idData
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Fiscal | null> {
    const sql = "SELECT * FROM fiscal WHERE idFiscal=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Fiscal(
        result[0].idFiscal,
        result[0].rfc,
        result[0].regimeT,
        result[0].fiscalAddress,
        result[0].idData
      );
    } catch (error) {
      return null;
    }
  }

  async createFiscal(
    rfc: string,
    regimeT: string,
    fiscalAddress: string,
    idData: number
  ): Promise<Fiscal | null> {
    const sql =
      "INSERT INTO fiscal (rfc, regimeT, fiscalAddress,idData) VALUES (?, ?, ?, ?)";
    const params: any[] = [rfc, regimeT, fiscalAddress, idData];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Fiscal(result.insertId, rfc, regimeT, fiscalAddress, idData);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newFiscal: Partial<Fiscal>): Promise<Fiscal | null> {
    const sql =
      "UPDATE fiscal SET rfc = ?, regimeT = ?, fiscalAddress = ?, idData = ? WHERE idFiscal = ?";
    const params: any[] = [
      newFiscal.rfc || '', // Si newData.name es undefined, se asigna una cadena vacía
      newFiscal.regimeT || '', // Si newData.description es undefined, se asigna una cadena vacía
      newFiscal.fiscalAddress || '', // Si newData.type es undefined, se asigna una cadena vacía
      newFiscal.idData || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedFiscal = new Fiscal(
        id,
        newFiscal.rfc || '',
        newFiscal.regimeT || '',
        newFiscal.fiscalAddress || '',
        newFiscal.idData || 0
      );
      return updatedFiscal;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM fiscal WHERE idFiscal = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
