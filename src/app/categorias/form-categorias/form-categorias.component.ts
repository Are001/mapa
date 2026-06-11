import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categorias } from '../categorias';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-form-categorias',
  standalone: false,
  templateUrl: './form-categorias.component.html',
  styleUrl: './form-categorias.component.css'
})
export class FormCategoriasComponent implements OnInit {
  
  constructor (private formBuilder: FormBuilder, private serviceCategorias: CategoriasService){}
  displayedColumns: string[] = ['id', 'descripcion', 'esActivo', 'fechaRegistro','acciones'];
  form!: FormGroup
   categorias:any;
  @Output()
  enviar:EventEmitter<categorias>= new EventEmitter<categorias>();
  
  ngOnInit(): void {
    //this.form = this.formBuilder.group({
      //descripcion:[],
      //fechaRegistro:[]
    //});

    this.serviceCategorias.postConsultarPoliza().subscribe(response => {
      this.categorias = response;
    //debugger; 
    //console.log(response );
      
    }, error => {
      debugger;
      alert(error);
    });
  }


  enviarDatos(){
    //alert("HI");
    
    
  //this.enviar.emit(this.form.value);
  this.serviceCategorias.postConsultarPoliza().subscribe(response => {
    //debugger; 
    //console.log(response );
      
    }, error => {
      debugger;
      alert(error);
    });
  
  }
    

}
