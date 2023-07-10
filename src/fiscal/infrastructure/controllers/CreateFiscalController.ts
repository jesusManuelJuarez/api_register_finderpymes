import { Request, Response } from "express";
import { CreateFiscalUseCase } from "../../application/CreateFiscalUseCase";
import { Fiscal } from "../../domain/Fiscal";

export class CreateFiscalController {
  constructor(private readonly createFiscalUseCase: CreateFiscalUseCase) {}

  async run(req: Request, res: Response) {
    const Fiscal = req.body;
    try {
      const fiscal = await this.createFiscalUseCase.run(
        Fiscal.rfc,
        Fiscal.regimeT,
        Fiscal.fiscalAddress,
        Fiscal.idData
      );

      if (fiscal)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Fiscal: {
            idFiscal: fiscal?.idFiscal,
            rfc: fiscal?.rfc,
            regimeT: fiscal?.regimeT,
            fiscalAddress: fiscal?.fiscalAddress,
            idData: fiscal?.idData
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
