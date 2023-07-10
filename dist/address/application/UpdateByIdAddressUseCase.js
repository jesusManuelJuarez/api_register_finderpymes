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
exports.UpdateByIdAddressUseCase = void 0;
class UpdateByIdAddressUseCase {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    run(id, newAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingAddress = yield this.addressRepository.getById(id);
                if (!existingAddress) {
                    return null;
                }
                // Realizar la actualización
                const updatedAddress = Object.assign(Object.assign({}, existingAddress), newAddress);
                const result = yield this.addressRepository.updateById(id, updatedAddress);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdAddressUseCase = UpdateByIdAddressUseCase;
