import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  // Category
  getCategories(): Observable<Category[]> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category[]>(categoriesUrl);
  }

  // Product Services
  createProduct(productBody: any): Observable<Product[]> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product[]>(productUrl, productBody);
  }
  // all products
  viewProducts(): Observable<Product[]> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product[]>(productUrl);
  }

  getProduct(productId: any): Observable<Product[]> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.get<Product[]>(productUrl);
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }
}
