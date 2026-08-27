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

  getProductsBySlug(slug: string) {
    for (let product of this.catalog) {
      if (product.slug === slug) {
        return product;
      }
    }
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

  getProductsLessOrEqualThanValue(value: number): Product[] {
    let selectedProducts = [];

    for (let product of this.catalog) {
      if (product.price <= value) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }

  getProductsGreaterThanValue(value: number): Product[] {
    let selectedProducts = [];

    for (let product of this.catalog) {
      if (product.price > value) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }

  getImagePathByCategory(category: string): string[] {
    let selectedImages = [];

    for (let product of this.catalog) {
      if (product.category === category) {
        selectedImages.push(product.image);
      }
    }

    return selectedImages;
  }
}
