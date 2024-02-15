import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost.8000/api/products';

  constructor(private http: HttpClient) {}

  saveProduct(productData: any) {
    return this.http.post(this.apiUrl, productData);
  }

  getProducts() {
    return this.http.get(this.apiUrl);
  }
}
