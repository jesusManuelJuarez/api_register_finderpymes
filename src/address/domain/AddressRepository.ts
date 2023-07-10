import { Address } from "./Address";

export interface AddressRepository {
  getAll(): Promise<Address[] | null>;

  getById(id: number): Promise<Address | null>;

  updateById(id: number, address: Address): Promise<Address | null>;
  deleteById(id: number): Promise<boolean>;

  createAddress(
    city: string,
    longitud: string,
    latitud : string,
    district : string,
    postalCode : string,
    cell : string,
    idData : number
  ): Promise<Address | null>;
}
