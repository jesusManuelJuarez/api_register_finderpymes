import { Address } from "../domain/Address";
import { AddressRepository } from "../domain/AddressRepository";

export class GetByIdAddressUseCase {
  constructor(readonly addressRepository: AddressRepository) {}

  async run(id: number): Promise<Address | null> {
    try {
      const result = await this.addressRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
