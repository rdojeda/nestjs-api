export class CreateProductDTO {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly createdAt: Date;

}