import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categorias } from '../categorias';
import { CategoriasService } from '../../services/categorias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-categoria',
  standalone: false,
  templateUrl: './consultar-categoria.component.html',
  styleUrl: './consultar-categoria.component.css'
})
export class ConsultarCategoriaComponent {
  constructor (private formBuilder: FormBuilder, private serviceCategorias: CategoriasService){}
  displayedColumns: string[] = ['id', 'descripcion', 'esActivo', 'fechaRegistro','acciones'];
  form!: FormGroup;
   private router = inject(Router);
   categorias:any;
  //@Output() 
  //enviar:EventEmitter<categorias>= new EventEmitter<categorias>();
  
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
      //debugger;
      //alert(error);
    });

   
  }


  enviarDatos(){
    //alert("HI");
     //this.enviar.emit(this.form.value);
    
 
  //this.serviceCategorias.postConsultarPoliza().subscribe(response => {
    //console.log(response );
      
    //}, error => {
      //alert(error);
   // });
  
  }

  enviarFormCategorias(){
    console.log("formulario insertar"); 
      this.router.navigate(['/categorias/insertar']);
  }

 editarCategorias(idCategoria:number){
    this.router.navigate(['/categorias/editar',idCategoria]);
   
    console.log(idCategoria);
  }

    deleteCategoria(idCategoria: number){
      Swal.fire({
  title: '¡Éxito!',
  text: 'Tu operación se realizó correctamente.',
  icon: 'success',
  confirmButtonText: 'Aceptar'
});
   
      this.serviceCategorias.eliminarCategoria(idCategoria).subscribe(response => {
      this.categorias = response;
       
    
    //debugger; 
    //console.log(response );
      
    }, error => {
      //debugger;
      //alert(error);
    });
    }

    obtenerIdCat(idCategoria:number){
      
    }

}
