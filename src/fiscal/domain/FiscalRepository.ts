import { Fiscal } from "./Fiscal";

export interface FiscalRepository {
  getAll(): Promise<Fiscal[] | null>;

  getById(id: number): Promise<Fiscal | null>;

  updateById(id: number, fiscal: Fiscal): Promise<Fiscal | null>;
  deleteById(id: number): Promise<boolean>;

  createFiscal(
    rfc: string,
    regimenT: string,
    fiscalAddress: string,
    idData : number
  ): Promise<Fiscal | null>;
}