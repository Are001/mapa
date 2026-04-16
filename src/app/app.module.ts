import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';

//import  {} from '@angular/material'
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import {LeafletModule} from '@bluehalo/ngx-leaflet';
import { AgregarUsuarioComponent } from './mapa/agregar-usuario/agregar-usuario.component';


import { CategoriasComponent } from './categorias/categorias.component';
import { CrearCategoriaComponent } from './categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { FormularioCategoriasComponent } from './categorias/formulario-categorias/formulario-categorias.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    AgregarUsuarioComponent,
    CategoriasComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    FormularioCategoriasComponent,
    FormCategoriasComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    MatFormFieldModule, 
     MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
   MatNativeDateModule
   
],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
