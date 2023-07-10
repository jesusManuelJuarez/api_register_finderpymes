import { Address } from "../domain/Address";
import { AddressRepository } from "../domain/AddressRepository";

export class UpdateByIdAddressUseCase {
  constructor(readonly addressRepository: AddressRepository) {}

  async run(id: number, newAddress: Partial<Address>): Promise<Address | null> {
    try {
      // Verificar si el dato existe
      const existingAddress = await this.addressRepository.getById(id);
      if (!existingAddress) {
        return null;
      }

      // Realizar la actualización
      const updatedAddress = {
        ...existingAddress,
        ...newAddress,
      };

      const result = await this.addressRepository.updateById(id, updatedAddress);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
