import { Address } from "../domain/Address";
import { AddressRepository } from "../domain/AddressRepository";

export class CreateAddressUseCase {
  constructor(readonly addressRepository: AddressRepository) {}

  async run(
    city: string,
    longitud: string,
    latitud : string,
    district : string,
    postalCode : string,
    cell : string,
    idData : number
  ): Promise<Address | null> {
    try {
      const address = await this.addressRepository.createAddress(
        city,
        longitud,
        latitud,
        district,
        postalCode,
        cell,
        idData
      );
      return address;
    } catch (error) {
      return null;
    }
  }
}
