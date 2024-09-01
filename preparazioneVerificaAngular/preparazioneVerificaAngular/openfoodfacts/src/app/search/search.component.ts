import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  item: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {

  }

  submit(itemName: HTMLInputElement): void {

    if (!itemName.value) {
      return;
    }
    this.item = itemName.value;
    this.obsTrack = this.spotify.searchItem(this.item);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}
