import { Fiscal } from "../domain/Fiscal";
import { FiscalRepository } from "../domain/FiscalRepository";

export class CreateFiscalUseCase {
  constructor(readonly fiscalRepository: FiscalRepository) {}

  async run(
    rfc: string,
    regimenT: string,
    fiscalAddress: string,
    idData : number
  ): Promise<Fiscal | null> {
    try {
      const fiscal = await this.fiscalRepository.createFiscal(
        rfc,
        regimenT,
        fiscalAddress,
        idData
      );
      return fiscal;
    } catch (error) {
      return null;
    }
  }
}
