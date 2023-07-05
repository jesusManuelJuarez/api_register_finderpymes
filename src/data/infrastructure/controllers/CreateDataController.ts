import { Request, Response } from "express";
import { CreateDataUseCase } from "../../application/CreateDataUseCase";
import { Data } from "../../domain/Data";

export class CreateDataController {
  constructor(private readonly createDataUseCase: CreateDataUseCase) {}

  async run(req: Request, res: Response) {
    const Data = req.body;
    try {
      const data = await this.createDataUseCase.run(
        Data.name,
        Data.description,
        Data.type,
        Data.website,
        Data.idUser
      );

      if (data)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Data: {
            idData: data?.idData,
            name: data?.name,
            description: data?.description,
            type: data?.type,
            website: data?.website,
            idUser: data?.idUser
          },
        });
      else
        res.status(204).send({
          status: "error",
          Data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        Data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
