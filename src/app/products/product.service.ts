import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  products: Array<Product> = new Array<Product>();
  constructor() {
    console.log('service created....');
  }

  getProducts() {
    return this.products;
  }

  getMaxSoldProduct() {
    let index = Math.round(Math.random() * 4);
    return this.products[index];
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
}
