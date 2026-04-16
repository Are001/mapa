import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './mapa/agregar-usuario/agregar-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormularioCategoriasComponent } from './categorias/formulario-categorias/formulario-categorias.component';
import { CrearCategoriaComponent } from './categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';

const routes: Routes = [
  {path:'usuarios', component: AgregarUsuarioComponent},
  {path:'categorias', component: CategoriasComponent},
  {path:'formulario', component: FormularioCategoriasComponent},
  {path:'crear', component: CrearCategoriaComponent},
  {path:'formCategorias', component:FormCategoriasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
