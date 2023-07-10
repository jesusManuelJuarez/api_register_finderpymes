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
exports.CreateAddressController = void 0;
class CreateAddressController {
    constructor(createAddressUseCase) {
        this.createAddressUseCase = createAddressUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Address = req.body;
            try {
                const address = yield this.createAddressUseCase.run(Address.city, Address.longitud, Address.latitud, Address.district, Address.postalCode, Address.cell, Address.idData);
                if (address)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        Data: {
                            idAddress: address === null || address === void 0 ? void 0 : address.idAddress,
                            city: address === null || address === void 0 ? void 0 : address.city,
                            longitud: address === null || address === void 0 ? void 0 : address.longitud,
                            latitud: address === null || address === void 0 ? void 0 : address.latitud,
                            district: address === null || address === void 0 ? void 0 : address.district,
                            postalCode: address === null || address === void 0 ? void 0 : address.postalCode,
                            cell: address === null || address === void 0 ? void 0 : address.cell,
                            idData: address === null || address === void 0 ? void 0 : address.idData
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
exports.CreateAddressController = CreateAddressController;
