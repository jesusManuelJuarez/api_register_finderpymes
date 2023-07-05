import express from "express";


import { createDataController } from "./dependencies";
import { getAllDataController } from "./dependencies";
import { getByIdDataController } from "./dependencies";
import { deleteByIdDataController } from "./dependencies";
import { updateByIdDataController } from "./dependencies";

export const dataRouter = express.Router();

dataRouter.get("/", getAllDataController.run.bind(getAllDataController));
dataRouter.get("/:idData", getByIdDataController.run.bind(getByIdDataController));
dataRouter.post("/", createDataController.run.bind(createDataController));
dataRouter.delete("/:idData", deleteByIdDataController.run.bind(deleteByIdDataController));
dataRouter.put("/:idData", updateByIdDataController.run.bind(updateByIdDataController));
