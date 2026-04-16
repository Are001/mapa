import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categorias } from '../categorias';

@Component({
  selector: 'app-form-categorias',
  standalone: false,
  templateUrl: './form-categorias.component.html',
  styleUrl: './form-categorias.component.css'
})
export class FormCategoriasComponent implements OnInit {
  constructor (private formBuilder: FormBuilder){}
  form!: FormGroup
  
  @Output()
  enviar:EventEmitter<categorias>= new EventEmitter<categorias>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion:[],
      fechaRegistro:[]
    });
  }


  enviarDatos(){
  this.enviar.emit(this.form.value);
  
  }
    

}
