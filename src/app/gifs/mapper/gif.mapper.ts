import { Gif } from '../Interfaces/gif.interface';
import { GiphyItem } from "../Interfaces/giphy.interfaces";

export class GifMapper{
  //metodo estatico, (Lo que resive), lo que regresa
  static mapGiphyItemGif(item:GiphyItem): Gif{
   return{
    id:item.id,
    title: item.title,
    url: item.images.original.url,
   }
  }

  static mapGiphyItemsTpGifArray(items:GiphyItem[]): Gif[]{
   return items.map(this.mapGiphyItemGif);

   }

}
