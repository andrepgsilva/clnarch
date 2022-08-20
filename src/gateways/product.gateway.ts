import Product from "../products";

export default interface ProductGateway {
  create(product: Product): Promise<void>;
}
