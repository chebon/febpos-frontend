import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/api'; // Adjust the URL based on your backend API

  constructor(private http: HttpClient) { }

  // Example method to fetch product data
  getProductData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  // Example method to save product data
  saveProductData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, data);
  }

  // Add more methods for other API endpoints as needed
}
