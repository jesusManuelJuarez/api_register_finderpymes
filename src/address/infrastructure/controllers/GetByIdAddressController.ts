import { Request, Response } from "express";
import { GetByIdAddressUseCase } from "../../application/GetByIdAddressUseCase";

export class GetByIdAddressController {
  constructor(readonly getByIdAddressUseCase: GetByIdAddressUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idAddress);
    try {
      const address = await this.getByIdAddressUseCase.run(id);

      if (address)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: {
              idAddress: address.idAddress,
              city: address.city,
              longitud: address.longitud,
              latitud:  address.latitud,
              district: address.district,
              postalCode: address.postalCode,
              cell: address.cell,
              idData: address.idData
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
