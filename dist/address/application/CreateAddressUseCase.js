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
exports.CreateAddressUseCase = void 0;
class CreateAddressUseCase {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    run(city, longitud, latitud, district, postalCode, cell, idData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield this.addressRepository.createAddress(city, longitud, latitud, district, postalCode, cell, idData);
                return address;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateAddressUseCase = CreateAddressUseCase;
