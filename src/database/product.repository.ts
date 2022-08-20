import ProductGateway from "../gateways/product.gateway";
import Product from "../products";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductGateway {
  async create(product: Product): Promise<void> {
    ProductModel.create({
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    });
  }
}
