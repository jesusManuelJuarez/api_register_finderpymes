"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataController = void 0;
class CreateDataController {
    constructor(createDataUseCase) {
        this.createDataUseCase = createDataUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Data = req.body;
            try {
                const data = yield this.createDataUseCase.run(Data.name, Data.description, Data.type, Data.website, Data.idUser);
                if (data)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Data: {
                            idData: data === null || data === void 0 ? void 0 : data.idData,
                            name: data === null || data === void 0 ? void 0 : data.name,
                            description: data === null || data === void 0 ? void 0 : data.description,
                            type: data === null || data === void 0 ? void 0 : data.type,
                            website: data === null || data === void 0 ? void 0 : data.website,
                            idUser: data === null || data === void 0 ? void 0 : data.idUser
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        Data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    Data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateDataController = CreateDataController;
