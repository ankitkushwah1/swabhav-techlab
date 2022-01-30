import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'sw-product-list',
  templateUrl: 'product-list.component.html',
  // template: `<div>
  //   <h1>Product List</h1>
  //   <div *ngFor="let p of products" class="list-group">
  //     <h2 class="list-group-item list-group-item-primary">
  //       {{ p.id }} -- {{ p.name }}
  //     </h2>
  //   </div>
  // </div> `,
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = new Array<Product>();
  @Input()
  public rate: number = 1;
  constructor(private productService: ProductService) {}
  clickHandler(prod_id: any, prod_name: any) {
    this.rate = Math.random() * 5;
    this.productService.addProduct(new Product(prod_id, prod_name, this.rate));
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
