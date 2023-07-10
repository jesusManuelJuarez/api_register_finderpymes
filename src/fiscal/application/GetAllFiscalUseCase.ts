import { Fiscal } from "../domain/Fiscal";
import { FiscalRepository } from "../domain/FiscalRepository";

export class GetAllFiscalUseCase {
  constructor(readonly fiscalRepository: FiscalRepository) {}

  async run(): Promise<Fiscal[] | null> {
    try {
      const result = await this.fiscalRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}