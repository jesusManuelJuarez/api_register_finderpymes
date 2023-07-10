import { Request, Response } from "express";
import { DeleteByIdAddressUseCase } from "../../application/DeleteByIdAddressUseCase";

export class DeleteByIdAddressController {
  constructor(private readonly deleteByIdAddressUseCase: DeleteByIdAddressUseCase) {}
  
  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idAddress);
    try {
      const deletedAddress = await this.deleteByIdAddressUseCase.run(id);

      if (deletedAddress) {
        // Código HTTP: 200 - Eliminación exitosa
        res.status(200).send({
          status: "success",
          message: "Registro eliminado correctamente",
        });
      } else {
        // Código HTTP: 404 - Registro no encontrado
        res.status(404).send({
          status: "error",
          message: "No se encontró el registro a eliminar",
        });
      }
    } catch (error: any) {
      // Código HTTP: 500 - Error interno del servidor
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error en la eliminación del registro",
        error: error.message,
      });
    }
  }
}
