import express from "express";


import { createAddressController } from "./dependencies";
import { getAllAddressController } from "./dependencies";
import { getByIdAddressController } from "./dependencies";
import { deleteByIdAddressController } from "./dependencies";
import { updateByIdAddressController } from "./dependencies";

export const addressRouter = express.Router();

addressRouter.get("/", getAllAddressController.run.bind(getAllAddressController));
addressRouter.get("/:idAddress", getByIdAddressController.run.bind(getByIdAddressController));
addressRouter.post("/", createAddressController.run.bind(createAddressController));
addressRouter.delete("/:idAddress", deleteByIdAddressController.run.bind(deleteByIdAddressController));
addressRouter.put("/:idAddress", updateByIdAddressController.run.bind(updateByIdAddressController));
