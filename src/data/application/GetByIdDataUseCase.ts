import { Data } from "../domain/Data";
import { DataRepository } from "../domain/DataRepository";

export class GetByIdDataUseCase {
  constructor(readonly dataRepository: DataRepository) {}

  async run(id: number): Promise<Data | null> {
    try {
      const result = await this.dataRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
