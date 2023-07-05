import { Data } from "../domain/Data";
import { DataRepository } from "../domain/DataRepository";

export class GetAllDataUseCase {
  constructor(readonly dataRepository: DataRepository) {}

  async run(): Promise<Data[] | null> {
    try {
      const result = await this.dataRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}