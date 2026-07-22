import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../Interfaces/giphy.interfaces';
import { Gif } from '../Interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';



const loadHistorial = ()=>{
  const historial = localStorage.getItem('historial') ?? '{}'; //Record<string, gifs[]>
  return historial? JSON.parse(historial):{}

}
@Injectable({providedIn: 'root'})
export class GifService {
private trendingPage = signal(0);
private http = inject(HttpClient);
trendingGifs = signal<Gif[]>([]);
tredingGifsLoading = signal(false);

//arreglo de gifs Masonry
trendingGifGroup = computed<Gif[][]>(()=>{
  const groups = [];
  for (let i = 0; i < this.trendingGifs().length; i+=3) {
    groups.push(this.trendingGifs().slice(i,i+3));

  }
  return groups ;
})


//guardar el historial.
searchHistory = signal<Record <string, Gif[]>>(loadHistorial());
searchHistoryKeys = computed(()=>Object.keys(this.searchHistory()));

constructor() { this.loadTrendingGifs();}

//localStore
saveToLocalStore = effect(()=>{
 localStorage.setItem('historial', JSON.stringify(this.searchHistory()));
})

loadTrendingGifs(){
  if(this.tredingGifsLoading()) return;
  this.tredingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl }/gifs/trending`,{
      params:{
        api_key: environment.apiKey,
        limit:20,
        offset: this.trendingPage()*20,
      }
    }).subscribe((resp)=>{
      //resp.data[0].images.original.url;
      const gifs = GifMapper.mapGiphyItemsTpGifArray(resp.data)
      this.trendingGifs.update(cgifs=>[
        ...cgifs,
        ...gifs
      ]);
      this.trendingPage.update((i)=>1+i);
      this.tredingGifsLoading.set(false);
      console.log(gifs);
    });
  }

  searchGifs(query:string){
    return this.http.get<GiphyResponse>(`${environment.giphyUrl }/gifs/search`,{
      params:{
        api_key: environment.apiKey,
        q: query,
        limit:5
      }
}).pipe(
  map(({data})=> data),
  map((items)=> GifMapper.mapGiphyItemsTpGifArray(items)),
  //Tap efecto secundario
  tap(items=>{
    this.searchHistory.update( h=>({
      //... propagacion : propiedad dinamica
      ...h,
      [query.toLowerCase()]: items,
    }))
  })

)

    // }).subscribe((resp)=>{
    //   const gifs = GifMapper.mapGiphyItemsTpGifArray(resp.data)

    //   console.log({search: gifs});
    // })

  }

  getHistoryGifs(query:string):Gif[]{
    return this.searchHistory()[query] ??[];
  }
}
