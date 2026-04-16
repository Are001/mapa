import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categorias } from '../categorias';

@Component({
  selector: 'app-formulario-categorias',
  standalone: false,
  templateUrl: './formulario-categorias.component.html',
  styleUrl: './formulario-categorias.component.css'
})
export class FormularioCategoriasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  form?: FormGroup;

  @Output()
  enviar: EventEmitter<categorias> =new EventEmitter<categorias>
  
  ngOnInit(): void {
     this.form = this.formBuilder.group({
    descripcion: ['', 
      {
        validators: [Validators.required ]}]
  });
  }



  EnviarFormulario(){
   this.enviar.emit(this.form?.value);
    
  }

}
