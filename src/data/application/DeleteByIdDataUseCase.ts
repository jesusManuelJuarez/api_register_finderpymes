import { DataRepository } from "../domain/DataRepository";

export class DeleteByIdDataUseCase {
  constructor(private readonly dataRepository: DataRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedData = await this.dataRepository.deleteById(id);

      if (deletedData) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
