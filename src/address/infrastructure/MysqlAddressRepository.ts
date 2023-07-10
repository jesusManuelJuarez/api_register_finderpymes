import { Address } from "../domain/Address";
import { AddressRepository } from "../domain/AddressRepository";
import { query } from "../../database/mysql";

export class MysqlAddressRepository implements AddressRepository {

  async getAll(): Promise<Address[] | null> {
    const sql = "SELECT * FROM address";
    try {
      const [info]: any = await query(sql, []);
      const infoAddress = Object.values(JSON.parse(JSON.stringify(info)));

      return infoAddress.map(
        (address: any) =>
          new Address(
            address.idAddress,
            address.city,
            address.longitud,
            address.latitud,
            address.district,
            address.postalCode,
            address.cell,
            address.idData
          )
      );
    } catch (error) {
      return null;
    }
  }
  
  async getById(id: number): Promise<Address | null> {
    const sql = "SELECT * FROM address WHERE idAddress=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Address(
        result[0].idAddress,
        result[0].city,
        result[0].longitud,
        result[0].latitud,
        result[0].district,
        result[0].postalCode,
        result[0].cell,
        result[0].idData
      );
    } catch (error) {
      return null;
    }
  }

  async createAddress(
    city: string,
    longitud: string,
    latitud: string,
    district: string,
    postalCode: string,
    cell: string,
    idData: number
  ): Promise<Address | null> {
    const sql =
      "INSERT INTO address (city, longitud, latitud, district,postalCode,cell, idData) VALUES (?, ?, ?, ?, ? ,? ,?)";
    const params: any[] = [city, longitud, latitud,district,postalCode,cell, idData];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Address(result.insertId, city, longitud, latitud,district,postalCode,cell, idData);
    } catch (error) {
      return null;
    }
  }

  async updateById(id: number, newAddress: Partial<Address>): Promise<Address | null> {
    const sql =
      "UPDATE address SET city = ?, longitud = ?, latitud = ?, district = ?,postalCode = ?,cell = ?, idData = ? WHERE idAddress = ?";
    const params: any[] = [
      newAddress.city || '', // Si newData.name es undefined, se asigna una cadena vacía
      newAddress.longitud || '', // Si newData.description es undefined, se asigna una cadena vacía
      newAddress.latitud || '',
      newAddress.district|| '',
      newAddress.postalCode || '',
      newAddress.cell || '', // 
      newAddress.idData || '', // Si newData.idUser es undefined, se asigna una cadena vacía
      id,
    ];
    try {
      const [result]: any = await query(sql, params);
      if (result.affectedRows === 0) {
        return null; // No se encontró el dato para actualizar
      }
      const updatedAddress = new Address(
        id,
        newAddress.city || '',
        newAddress.longitud || '',
        newAddress.latitud || '',
        newAddress.district || '',
        newAddress.postalCode || '',
        newAddress.cell || '',
        newAddress.idData || 0
      );
      return updatedAddress;
    } catch (error) {
      return null; // Error en la actualización
    }
  }

  async deleteById(id: number): Promise<boolean> {
    const sql = "DELETE FROM address WHERE idAddress = ?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      return result.affectedRows > 0;
    } catch (error) {
      return false; // Error en la eliminación
    }
  } 
}
