import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.services';
import { Gif } from '../../Interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
searchService = inject(GifService);
gifs =signal<Gif[]>([]);

onSearch(query:string){
 this.searchService.searchGifs(query).subscribe(resp => {
  this.gifs.set(resp);
 });


  }



}
