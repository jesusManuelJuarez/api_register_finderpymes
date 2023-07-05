import { Request, Response } from "express";
import { GetAllDataUseCase } from "../../application/GetAllDataUseCase";

export class GetAllDataController {
  constructor(readonly getAllDataUseCase: GetAllDataUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const datas = await this.getAllDataUseCase.run();
      console.log(datas);
      if (datas)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: datas.map((data: any) => {
            return {
              idData: data.idData,
              name: data.name,
              description: data.description,
              type:  data.type,
              website: data.website,
              idUser: data.idUser
            };
          }),
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
