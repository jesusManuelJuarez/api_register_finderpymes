import { Data } from "./Data";

export interface DataRepository {
  getAll(): Promise<Data[] | null>;

  getById(id: number): Promise<Data | null>;

  updateById(id: number, data: Data): Promise<Data | null>;
  deleteById(id: number): Promise<boolean>;

  createData(
    name: string,
    description: string,
    type : string,
    website : string,
    idUser : number
  ): Promise<Data | null>;
}
