import { AddressRepository } from "../domain/AddressRepository";

export class DeleteByIdAddressUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedAddress = await this.addressRepository.deleteById(id);

      if (deletedAddress) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
