import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }
  searchItem(item: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${item}&page_size=5&json=true`;
    return this.http.get(url);
  }
  getItem(id: string) {
    const url = ` https://world.openfoodfacts.org/api/v0/product/${id}`;
    console.log(url);
    return this.http.get(url);
  }
  
}
