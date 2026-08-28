import rawData from "../data/products.json";
import { Product } from "./product";

export class ProductCatalog {
  private catalog: Product[];

  constructor() {
    this.catalog = rawData.map((item) => new Product(item));
  }

  get allProducts() {
    return this.catalog;
  }

  getProductsByCategory(category: string): Product[] {
    let selectedCategories = [];

    for (let product of this.catalog) {
      if (product.category === category) {
        selectedCategories.push(product);
      }
    }

    return selectedCategories;
  }
}
