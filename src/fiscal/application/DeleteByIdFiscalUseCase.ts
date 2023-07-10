import { FiscalRepository } from "../domain/FiscalRepository";

export class DeleteByIdFiscalUseCase {
  constructor(private readonly fiscalRepository: FiscalRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const deletedFiscal = await this.fiscalRepository.deleteById(id);

      if (deletedFiscal) {
        return true; // Eliminación exitosa
      } else {
        return false; // No se encontró el registro a eliminar
      }
    } catch (error) {
      throw new Error("Error en la eliminación del registro");
    }
  }
}
