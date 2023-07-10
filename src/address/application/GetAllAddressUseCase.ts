import { Address } from "../domain/Address";
import { AddressRepository } from "../domain/AddressRepository";

export class GetAllAddressUseCase {
  constructor(readonly addressRepository: AddressRepository) {}

  async run(): Promise<Address[] | null> {
    try {
      const result = await this.addressRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}