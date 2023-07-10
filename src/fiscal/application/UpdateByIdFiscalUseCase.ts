import { Fiscal } from "../domain/Fiscal";
import { FiscalRepository } from "../domain/FiscalRepository";

export class UpdateByIdFiscalUseCase {
  constructor(readonly fiscalRepository: FiscalRepository) {}

  async run(id: number, newFiscal: Partial<Fiscal>): Promise<Fiscal | null> {
    try {
      // Verificar si el dato existe
      const existingFiscal = await this.fiscalRepository.getById(id);
      if (!existingFiscal) {
        return null;
      }

      // Realizar la actualización
      const updatedFiscal = {
        ...existingFiscal,
        ...newFiscal,
      };

      const result = await this.fiscalRepository.updateById(id, updatedFiscal);
      return result;
    } catch (error) {
      // Manejar errores
      throw error;
    }
  }
}
