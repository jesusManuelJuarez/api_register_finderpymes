import { Request, Response } from "express";
import { GetByIdDataUseCase } from "../../application/GetByIdDataUseCase";

export class GetByIdDataController {
  constructor(readonly getByIdDataUseCase: GetByIdDataUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idData);
    try {
      const data = await this.getByIdDataUseCase.run(id);

      if (data)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idData: data.idData,
              name: data.name,
              description: data.description,
              type:  data.type,
              website: data.website,
              idUser: data.idUser
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        info: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
