import { Request, Response } from "express";
import { GetAllAddressUseCase } from "../../application/GetAllAddressUseCase";

export class GetAllAddressController {
  constructor(readonly getAllAddressUseCase: GetAllAddressUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const addresss = await this.getAllAddressUseCase.run();
      console.log(addresss);
      if (addresss)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          info: addresss.map((address: any) => {
            return {
              idAddress: address.idAddress,
              city: address.city,
              longitud: address.longitud,
              latitud:  address.latitud,
              district: address.district,
              postalCode: address.postalCode,
              cell: address.cell,
              idData: address.idData
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
