import { Request, Response } from "express";
import { GetByIdFiscalUseCase } from "../../application/GetByIdFiscalUseCase";

export class GetByIdFiscalController {
  constructor(readonly getByIdFiscalUseCase: GetByIdFiscalUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idFiscal);
    try {
      const fiscal = await this.getByIdFiscalUseCase.run(id);

      if (fiscal)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idFiscal: fiscal.idFiscal,
              rfc: fiscal.rfc,
              regimeT: fiscal.regimeT,
              fiscalAddress:  fiscal.fiscalAddress,
              idData: fiscal.idData
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
