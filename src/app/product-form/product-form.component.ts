import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productName: string = '';
  category: string = '';
  sellingPrice: number = 0;
  unit: string = '';
  description: string = '';

  constructor(private productService: ProductService) {}

  saveProduct() {
    const productData = {
      name: this.productName,
      category: this.category,
      sellingPrice: this.sellingPrice,
      unit: this.unit,
      description: this.description
    };

    this.productService.saveProduct(productData).subscribe(() => {
      
    }, error => {
      
    });
  }
}
