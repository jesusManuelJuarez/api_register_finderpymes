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
exports.UpdateByIdDataUseCase = void 0;
class UpdateByIdDataUseCase {
    constructor(dataRepository) {
        this.dataRepository = dataRepository;
    }
    run(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar si el dato existe
                const existingData = yield this.dataRepository.getById(id);
                if (!existingData) {
                    return null;
                }
                // Realizar la actualización
                const updatedData = Object.assign(Object.assign({}, existingData), newData);
                const result = yield this.dataRepository.updateById(id, updatedData);
                return result;
            }
            catch (error) {
                // Manejar errores
                throw error;
            }
        });
    }
}
exports.UpdateByIdDataUseCase = UpdateByIdDataUseCase;
