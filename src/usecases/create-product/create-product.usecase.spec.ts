import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../database/product.model";
import ProductRepository from "../../database/product.repository";
import CreateProductUseCase from "./create-product.usecase";

describe("create product usecase unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();
  });

  it("should create a product", async () => {
    const input = {
      id: "abc",
      name: "iPhone",
      cost: 100,
    };

    const output = {
      id: "abc",
      name: "iPhone",
      cost: 100,
      salesPrice: 300,
    };

    const productRepository = new ProductRepository();

    const createProductUseCase = new CreateProductUseCase(productRepository);

    const result = await createProductUseCase.execute(input);
    expect(result).toEqual(output);
  });
});
