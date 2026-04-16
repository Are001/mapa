import { Component, OnInit } from '@angular/core';
import { categorias } from './categorias';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  ngOnInit(): void {
    
  }


  guardar(categorias: categorias){
    console.log(categorias);

  }

 
}
