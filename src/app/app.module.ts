import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

//import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { FormsModule,FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import  {} from '@angular/material'

import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule, MatRipple } from '@angular/material/core'
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import {LeafletModule} from '@bluehalo/ngx-leaflet';
import { AgregarUsuarioComponent } from './mapa/agregar-usuario/agregar-usuario.component';


import { CategoriasComponent } from './categorias/categorias.component';
import { ConsultarCategoriaComponent } from './categorias/consultar-categoria/consultar-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    AgregarUsuarioComponent,
    CategoriasComponent,
    ConsultarCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    FormCategoriasComponent,
    
    
    
  ],
  imports: [
    ReactiveFormsModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    MatCheckboxModule,
    
    
    FormsModule,
    
  
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatRipple,
    
],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
