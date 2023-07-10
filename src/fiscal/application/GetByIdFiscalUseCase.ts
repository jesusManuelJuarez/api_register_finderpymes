import { Fiscal } from "../domain/Fiscal";
import { FiscalRepository } from "../domain/FiscalRepository";

export class GetByIdFiscalUseCase {
  constructor(readonly fiscalRepository: FiscalRepository) {}

  async run(id: number): Promise<Fiscal | null> {
    try {
      const result = await this.fiscalRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
