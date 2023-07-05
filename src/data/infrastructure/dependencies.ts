import { GetAllDataUseCase } from "../application/GetAllDataUseCase";
import { CreateDataUseCase } from "../application/CreateDataUseCase";
import { GetByIdDataUseCase } from "../application/GetByIdDataUseCase";
import { DeleteByIdDataUseCase } from "../application/DeleteByIdDataUseCase";
import { UpdateByIdDataUseCase } from "../application/UpdateByIdDataUseCase";
import { CreateDataController } from "./controllers/CreateDataController";
import { GetAllDataController } from "./controllers/GetAllDataController";
import { GetByIdDataController } from "./controllers/GetByIdDataController";
import { UpdateByIdDataController } from "./controllers/UpdateByIdDataController";
import { DeleteByIdDataController } from "./controllers/DeleteByIdDataController";
import { MysqlDataRepository } from "./MysqlDataRepository";

export const mysqlDataRepository = new MysqlDataRepository();

export const createDataUseCase = new CreateDataUseCase(
    mysqlDataRepository
  );
export const getAllUseCase = new GetAllDataUseCase(mysqlDataRepository);

export const getByIdDataUseCase = new GetByIdDataUseCase(
    mysqlDataRepository
  );

export const updateByIdDataUseCase = new UpdateByIdDataUseCase(
    mysqlDataRepository
    );

export const deleteByIdDataUseCase = new DeleteByIdDataUseCase(
    mysqlDataRepository
    );

export const createDataController = new CreateDataController(
    createDataUseCase
);
export const getAllDataController = new GetAllDataController(
    getAllUseCase
);

export const getByIdDataController = new GetByIdDataController(
    getByIdDataUseCase
);
export const deleteByIdDataController = new DeleteByIdDataController(
    deleteByIdDataUseCase
    );
export const updateByIdDataController = new UpdateByIdDataController(
    updateByIdDataUseCase
    );
  