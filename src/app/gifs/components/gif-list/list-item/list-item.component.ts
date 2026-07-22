import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
    //imageList  = input.required<string>();
    //product = input.required<{ id: number; name: string; price: number; stock: number }[]>();

    //delete = output new EventEmitter<number>();
    imageList = input<string>();
    //product = input<{ id: number; name: string; price: number; stock: number }[]>();

}
