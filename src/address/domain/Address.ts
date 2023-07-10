export class Address {
    constructor(
      readonly idAddress: number,
      readonly city: string,
      readonly longitud: string,
      readonly latitud: string,
      readonly district: string, //new
      readonly postalCode: string,
      readonly cell: string, //new
      readonly idData: number,
    ) {}
  }

