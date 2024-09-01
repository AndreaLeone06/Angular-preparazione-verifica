import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',  // Mantieni 'app-item' se il componente si chiama ItemComponent
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {  // Mantieni 'ItemComponent' qui
  routeParameters$: Observable<ParamMap>; 
  productDetail: any;
  productService$: Observable<Object>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService,
    private locationService: Location
  ) {}

  ngOnInit(): void {
    this.routeParameters$ = this.activatedRoute.paramMap;
    this.routeParameters$.subscribe(this.loadProductDetails);
  }
  
  loadProductDetails = (params: ParamMap) => {
    const productId = params.get('id');
    if (productId) {
      this.productService$ = this.productService.fetchProduct(productId);
      this.productService$.subscribe((data) => this.productDetail = data);
    }
  }

  goBack(): void {
    this.locationService.back();
  }
}
