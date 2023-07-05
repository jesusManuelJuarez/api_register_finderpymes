import { Data } from "../domain/Data";
import { DataRepository } from "../domain/DataRepository";

export class UpdateByIdDataUseCase {
  constructor(readonly dataRepository: DataRepository) {}

  async run(id: number, newData: Partial<Data>): Promise<Data | null> {
    try {
      // Verificar si el dato existe
      const existingData = await this.dataRepository.getById(id);
      if (!existingData) {
        return null;
      }

      // Realizar la actualización
      const updatedData = {
        ...existingData,
        ...newData,
      };

      const result = await this.dataRepository.updateById(id, updatedData);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
