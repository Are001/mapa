import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-categoria',
  standalone: false,
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.css'
})
export class EditarCategoriaComponent implements OnInit {
    public form!: FormGroup;
  
    idCategoria!: number
    @Input() valorRecibido: number =0;
    categorias: any[] = [];
   


    constructor(private fb:FormBuilder, private serviceCategorias: CategoriasService,private route: ActivatedRoute) {
   
  }
  ngOnInit(): void {
        const idCategoria = Number(this.route.snapshot.paramMap.get('idCategoria'));

  console.log(idCategoria);
    
    /*this.idCategoria = Number(this.route.snapshot.paramMap.get('idCategoria'));
    console.log(this.idCategoria);
    this.cargarIdCategoria(this.idCategoria);*/
     this.form = this.fb.group({
      idCategoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      esActivo: ['', Validators.required],
      fechaRegistro: ['', Validators.required]
    })
    
    
    this.cargarIdCategoria(idCategoria);
   
  }

  cargarIdCategoria(idCategoria:number){
    
   this.serviceCategorias.obtenerIdCategoria(idCategoria).subscribe(response => {
    console.log(response)
    this.form.patchValue(response[0]);
    console.log('Response:', JSON.stringify(response, null, 2));
    console.log('Formulario:', this.form.value);
  
  })

  }

 

  guardar(){
  const idCategoria = Number(this.route.snapshot.paramMap.get('idCategoria'));

  console.log(idCategoria);
    


  
    this.serviceCategorias.actualizarCategoria(idCategoria,this.form.value)
      .subscribe(response => {
        this.form.patchValue(response);
        console.log('Categoría actualizada');
      });

  }
}
