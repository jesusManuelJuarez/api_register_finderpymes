import { Request, Response } from "express";
import { CreateAddressUseCase } from "../../application/CreateAddressUseCase";
import { Address } from "../../domain/Address";

export class CreateAddressController {
  constructor(private readonly createAddressUseCase: CreateAddressUseCase) {}

  async run(req: Request, res: Response) {
    const Address = req.body;
    try {
      const address = await this.createAddressUseCase.run(
        Address.city,
        Address.longitud,
        Address.latitud,
        Address.district,
        Address.postalCode,
        Address.cell,
        Address.idData
      );

      if (address)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          Data: {
            idAddress: address?.idAddress,
            city: address?.city,
            longitud: address?.longitud,
            latitud: address?.latitud,
            district: address?.district,
            postalCode: address?.postalCode,
            cell: address?.cell,
            idData: address?.idData
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
