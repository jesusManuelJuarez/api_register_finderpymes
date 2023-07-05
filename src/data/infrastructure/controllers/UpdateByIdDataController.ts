import { Request, Response } from "express";
import { UpdateByIdDataUseCase } from "../../application/UpdateByIdDataUseCase";

export class UpdateByIdDataController {
  constructor(readonly updateByIdDataUseCase: UpdateByIdDataUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idData);
    const newData = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedData = await this.updateByIdDataUseCase.run(id, newData);

      if (updatedData) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idData: updatedData.idData,
            name: updatedData.name,
            description: updatedData.description,
            type: updatedData.type,
            website: updatedData.website,
            idUser: updatedData.idUser
          },
        });
      } else {
        // Código HTTP: 400 -> Error de actualización
        res.status(400).send({
          status: "error",
          msn: "No se pudo actualizar el dato",
        });
      }
    } catch (error) {
      // Código HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        info: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
