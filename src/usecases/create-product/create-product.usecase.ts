import ProductGateway from "../../gateways/product.gateway";
import Product from "../../products";
import {
  CreateProductInputDto,
  CreateProductOutputDto,
} from "./create-product.dto";

export default class CreateProductUseCase {
  _productGateway: ProductGateway;

  constructor(productGateway: ProductGateway) {
    this._productGateway = productGateway;
  }

  async execute(input: CreateProductInputDto): Promise<CreateProductOutputDto> {
    const product = new Product(input.id, input.name);
    product.cost = input.cost;

    await this._productGateway.create(product);

    return {
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    };
  }
}
