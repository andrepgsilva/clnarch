import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "products", timestamps: false })
export default class ProductModel extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  name: string;

  @Column
  cost: number;

  @Column
  salesPrice: number;
}
