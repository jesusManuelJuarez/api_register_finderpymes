import { Request, Response } from "express";
import { UpdateByIdAddressUseCase } from "../../application/UpdateByIdAddressUseCase";

export class UpdateByIdAddressController {
  constructor(readonly updateByIdAddressUseCase: UpdateByIdAddressUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idAddress);
    const newAddress = req.body; // Supongamos que los datos a actualizar se envían en el body de la solicitud

    try {
      const updatedAddress = await this.updateByIdAddressUseCase.run(id, newAddress);

      if (updatedAddress) {
        // Código HTTP: 200 -> Actualización exitosa
        res.status(200).send({
          status: "success",
          info: {
            idAddress: updatedAddress.idAddress,
            city: updatedAddress.city,
            longitud: updatedAddress.longitud,
            latitud: updatedAddress.latitud,
            district: updatedAddress.district,
            postalCode: updatedAddress.postalCode,
            cell: updatedAddress.cell,
            idData: updatedAddress.idData
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
