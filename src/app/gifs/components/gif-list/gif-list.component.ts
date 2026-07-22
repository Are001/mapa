import { Component, input } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";
import { Gif } from '../../Interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [ListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
   gifs  = input.required<Gif[]>();

   users = [
    {id:1, name:'Javier'},
    {id:2, name:'Mary'},
    {id:3, name:'Cesar'},
    {id:4, name:'Maximo'},
    {id:5, name:'Cleopatra'},
   ]

   products = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      stock:8
    },
       {
      id: 2,
      name: 'Tablet',
      price: 3600,
      stock:8
    },
       {
      id: 3,
      name: 'Cellphone',
      price: 7000,
      stock:3
    },
       {
      id: 4,
      name: 'Ipad',
      price: 8000,
      stock:7
    },
       {
      id: 5,
      name: 'Proyector',
      price: 25000,
      stock:4
    },

   ];

   deleteProducto(id:number){
    this.products = this.products.filter(p=>p.id !==id );
   }



}

