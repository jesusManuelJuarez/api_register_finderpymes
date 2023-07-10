import express from "express";


import { createFiscalController } from "./dependencies";
import { getAllFiscalController } from "./dependencies";
import { getByIdFiscalController } from "./dependencies";
import { deleteByIdFiscalController } from "./dependencies";
import { updateByIdFiscalController } from "./dependencies";

export const fiscalRouter = express.Router();

fiscalRouter.get("/", getAllFiscalController.run.bind(getAllFiscalController));
fiscalRouter.get("/:idFiscal", getByIdFiscalController.run.bind(getByIdFiscalController));
fiscalRouter.post("/", createFiscalController.run.bind(createFiscalController));
fiscalRouter.delete("/:idFiscal", deleteByIdFiscalController.run.bind(deleteByIdFiscalController));
fiscalRouter.put("/:idFiscal", updateByIdFiscalController.run.bind(updateByIdFiscalController));
