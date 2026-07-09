import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';
import { formatDate } from '@angular/common';
import { identity } from 'rxjs';


@Component({
  selector: 'app-form-categorias',
  standalone: false,
  templateUrl: './form-categorias.component.html',
  styleUrl: './form-categorias.component.css'
})
export class FormCategoriasComponent {
 
 public form!: FormGroup;
  //formBuilder: any;
  constructor(private fb:FormBuilder,private serviceCategorias: CategoriasService){
    this.form = this.fb.group({
      //idCategoria:['', Validators.required],
       descripcion: ['', Validators.required],
       esActivo: ['', Validators.required],
       fechaRegistro: ['', Validators.required]
    })
  }

    
  insertarCategoria(){
  
     if (this.form.valid) {
     
       debugger
      this.serviceCategorias.insertarCategoria(this.form.value).subscribe(response=>{
        
        this.form.patchValue(response);
       
        }, error => {
      debugger;
      alert(error);
      });
     }
    }
  
}
