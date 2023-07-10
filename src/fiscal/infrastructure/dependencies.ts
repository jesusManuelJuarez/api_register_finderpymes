import { GetAllFiscalUseCase } from "../application/GetAllFiscalUseCase";
import { CreateFiscalUseCase } from "../application/CreateFiscalUseCase";
import { GetByIdFiscalUseCase } from "../application/GetByIdFiscalUseCase";
import { DeleteByIdFiscalUseCase } from "../application/DeleteByIdFiscalUseCase";
import { UpdateByIdFiscalUseCase } from "../application/UpdateByIdFiscalUseCase";
import { CreateFiscalController } from "./controllers/CreateFiscalController";
import { GetAllFiscalController } from "./controllers/GetAllFiscalController";
import { GetByIdFiscalController } from "./controllers/GetByIdFiscalController";
import { UpdateByIdFiscalController } from "./controllers/UpdateByIdFiscalController";
import { DeleteByIdFiscalController } from "./controllers/DeleteByIdFiscalController";
import { MysqlFiscalRepository } from "./MysqlFiscalRepository";

export const mysqlFiscalRepository = new MysqlFiscalRepository();

export const createFiscalUseCase = new CreateFiscalUseCase(
    mysqlFiscalRepository
  );
export const getAllFiscalUseCase = new GetAllFiscalUseCase(mysqlFiscalRepository);

export const getByIdFiscalUseCase = new GetByIdFiscalUseCase(
    mysqlFiscalRepository
  );

export const updateByIdFiscalUseCase = new UpdateByIdFiscalUseCase(
    mysqlFiscalRepository
    );

export const deleteByIdFiscalUseCase = new DeleteByIdFiscalUseCase(
    mysqlFiscalRepository
    );

export const createFiscalController = new CreateFiscalController(
    createFiscalUseCase
);
export const getAllFiscalController = new GetAllFiscalController(
    getAllFiscalUseCase
);

export const getByIdFiscalController = new GetByIdFiscalController(
    getByIdFiscalUseCase
);
export const deleteByIdFiscalController = new DeleteByIdFiscalController(
    deleteByIdFiscalUseCase
    );
export const updateByIdFiscalController = new UpdateByIdFiscalController(
    updateByIdFiscalUseCase
    );
  