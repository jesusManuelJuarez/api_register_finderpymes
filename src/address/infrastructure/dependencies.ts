import { GetAllAddressUseCase } from "../application/GetAllAddressUseCase";
import { CreateAddressUseCase } from "../application/CreateAddressUseCase";
import { GetByIdAddressUseCase } from "../application/GetByIdAddressUseCase";
import { DeleteByIdAddressUseCase } from "../application/DeleteByIdAddressUseCase";
import { UpdateByIdAddressUseCase } from "../application/UpdateByIdAddressUseCase";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { GetAllAddressController } from "./controllers/GetAllAdressController";
import { GetByIdAddressController } from "./controllers/GetByIdAddressController";
import { UpdateByIdAddressController } from "./controllers/UpdateByIdAddressController";
import { DeleteByIdAddressController } from "./controllers/DeleteByIdAddressController";
import { MysqlAddressRepository } from "./MysqlAddressRepository";

export const mysqlAddressRepository = new MysqlAddressRepository();

export const createAddressUseCase = new CreateAddressUseCase(
    mysqlAddressRepository
  );
export const getAllUseCase = new GetAllAddressUseCase(mysqlAddressRepository);

export const getByIdAddressUseCase = new GetByIdAddressUseCase(
    mysqlAddressRepository
  );

export const updateByIdAddressUseCase = new UpdateByIdAddressUseCase(
    mysqlAddressRepository
    );

export const deleteByIdAddressUseCase = new DeleteByIdAddressUseCase(
    mysqlAddressRepository
    );

export const createAddressController = new CreateAddressController(
    createAddressUseCase
);
export const getAllAddressController = new GetAllAddressController(
    getAllUseCase
);

export const getByIdAddressController = new GetByIdAddressController(
    getByIdAddressUseCase
);
export const deleteByIdAddressController = new DeleteByIdAddressController(
    deleteByIdAddressUseCase
    );
export const updateByIdAddressController = new UpdateByIdAddressController(
    updateByIdAddressUseCase
    );
  