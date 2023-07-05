import { Request, Response } from "express";
import { DeleteByIdDataUseCase } from "../../application/DeleteByIdDataUseCase";

export class DeleteByIdDataController {
  constructor(private readonly deleteByIdDataUseCase: DeleteByIdDataUseCase) {}
  
  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.idData);
    try {
      const deletedData = await this.deleteByIdDataUseCase.run(id);

      if (deletedData) {
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
