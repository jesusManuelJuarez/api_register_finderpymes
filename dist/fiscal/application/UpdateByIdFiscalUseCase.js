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
exports.UpdateByIdFiscalUseCase = void 0;
class UpdateByIdFiscalUseCase {
    constructor(fiscalRepository) {
        this.fiscalRepository = fiscalRepository;
    }
    run(id, newFiscal) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingFiscal = yield this.fiscalRepository.getById(id);
                if (!existingFiscal) {
                    return null;
                }
                // Realizar la actualización
                const updatedFiscal = Object.assign(Object.assign({}, existingFiscal), newFiscal);
                const result = yield this.fiscalRepository.updateById(id, updatedFiscal);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdFiscalUseCase = UpdateByIdFiscalUseCase;
