import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string;
  searchResults$: Observable<any>;

  constructor(private productService: ProductService) {}

  onSearch(inputElement: HTMLInputElement): void {
    const query = inputElement.value.trim();
    if (!query) {
      return;
    }
    this.searchTerm = query;
    this.searchResults$ = this.productService.searchProducts(this.searchTerm);
    this.searchResults$.subscribe(results => console.log(results));
  }
}
