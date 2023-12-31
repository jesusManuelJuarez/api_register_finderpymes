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
exports.CreateFiscalController = void 0;
class CreateFiscalController {
    constructor(createFiscalUseCase) {
        this.createFiscalUseCase = createFiscalUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Fiscal = req.body;
            try {
                const fiscal = yield this.createFiscalUseCase.run(Fiscal.rfc, Fiscal.regimeT, Fiscal.fiscalAddress, Fiscal.idData);
                if (fiscal)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Fiscal: {
                            idFiscal: fiscal === null || fiscal === void 0 ? void 0 : fiscal.idFiscal,
                            rfc: fiscal === null || fiscal === void 0 ? void 0 : fiscal.rfc,
                            regimeT: fiscal === null || fiscal === void 0 ? void 0 : fiscal.regimeT,
                            fiscalAddress: fiscal === null || fiscal === void 0 ? void 0 : fiscal.fiscalAddress,
                            idData: fiscal === null || fiscal === void 0 ? void 0 : fiscal.idData
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
exports.CreateFiscalController = CreateFiscalController;
