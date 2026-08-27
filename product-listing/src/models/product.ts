export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

export class Product {
  private product: IProduct;
  constructor(product: IProduct) {
    this.product = product;
  }

  get id() {
    return this.product.id;
  }

  get title() {
    return this.product.title;
  }

  get slug() {
    return this.product.slug;
  }

  get price() {
    return this.product.price;
  }

  get category() {
    return this.product.category;
  }

  get image() {
    return this.product.image;
  }

  get description() {
    return this.product.description;
  }

  get inStock() {
    return this.product.inStock;
  }
}
