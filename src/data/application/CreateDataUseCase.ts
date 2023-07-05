import { Data } from "../domain/Data";
import { DataRepository } from "../domain/DataRepository";

export class CreateDataUseCase {
  constructor(readonly dataRepository: DataRepository) {}

  async run(
    name: string,
    description: string,
    type : string,
    website : string,
    idUser : number
  ): Promise<Data | null> {
    try {
      const data = await this.dataRepository.createData(
        name,
        description,
        type,
        website,
        idUser
      );
      return data;
    } catch (error) {
      return null;
    }
  }
}
