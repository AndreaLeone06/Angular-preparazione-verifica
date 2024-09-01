import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  routeObs: Observable<ParamMap>; 

  item : any;
  spotifyServiceObs: Observable<Object>;
  constructor(
    private route: ActivatedRoute, 
    private service: SpotifyService,
    private location: Location  ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  
  getRouterParam = (params: ParamMap) =>
  {
    let ItemID = params.get('id');
    this.spotifyServiceObs = this.service.getItem(ItemID) ;
    this.spotifyServiceObs.subscribe((data)=>this.item = data)
    console.log(this.item);
  }
  back() : void
  {
    this.location.back();
  }
}
