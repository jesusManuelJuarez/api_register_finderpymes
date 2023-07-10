import { Request, Response } from "express";
import { GetAllFiscalUseCase } from "../../application/GetAllFiscalUseCase";

export class GetAllFiscalController {
  constructor(readonly getAllFiscalUseCase: GetAllFiscalUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const fiscals = await this.getAllFiscalUseCase.run();
      console.log(fiscals);
      if (fiscals)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: fiscals.map((fiscal: any) => {
            return {
              idFiscal: fiscal.idFiscal,
              rfc: fiscal.rfc,
              regimeT: fiscal.regimeT,
              idData:  fiscal.idData
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
