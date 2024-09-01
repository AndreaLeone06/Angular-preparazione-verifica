import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://world.openfoodfacts.org/cgi';

  constructor(private http: HttpClient) {}

  searchProducts(query: string) {
    const url = `${this.apiUrl}/search.pl?search_terms=${query}&page_size=5&json=true`;
    return this.http.get(url);
  }

  fetchProduct(id: string) {
    const url = `${this.apiUrl}/v0/product/${id}`;
    return this.http.get(url);
  }
}
