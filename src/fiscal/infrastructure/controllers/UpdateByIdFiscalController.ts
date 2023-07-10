import { Request, Response } from "express";
import { UpdateByIdFiscalUseCase } from "../../application/UpdateByIdFiscalUseCase";

export class UpdateByIdFiscalController {
  constructor(readonly updateByIdFiscalUseCase: UpdateByIdFiscalUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idFiscal);
    const newFiscal = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedFiscal = await this.updateByIdFiscalUseCase.run(id, newFiscal);

      if (updatedFiscal) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idFiscal: updatedFiscal.idFiscal,
            rfc: updatedFiscal.rfc,
            regimeT: updatedFiscal.regimeT,
            fiscalAddress: updatedFiscal.fiscalAddress,
            idData: updatedFiscal.idData
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
