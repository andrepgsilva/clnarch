export default class Product {
  _name: string;
  _cost: number;
  _id: string;

  constructor(id: string, name: string) {
    this._name = name;
    this._id = id;
    this._cost = 0;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get cost() {
    return this._cost;
  }

  set cost(cost: number) {
    if (cost < 0) {
      throw new Error("Cost cannot be negative");
    }

    this._cost = cost;
  }

  get salesPrice() {
    return this._cost * 3;
  }
}
