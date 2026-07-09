import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './mapa/agregar-usuario/agregar-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ConsultarCategoriaComponent } from './categorias/consultar-categoria/consultar-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { FormCategoriasComponent } from './categorias/form-categorias/form-categorias.component';

const routes: Routes = [
  {path:'usuarios', component: AgregarUsuarioComponent},
  {path:'categorias/form', component: FormCategoriasComponent},
  {path:'categorias/insertar', component: FormCategoriasComponent},
  {path:'categorias', component: ConsultarCategoriaComponent},
  {path:'categorias/editar/:idCategoria', component: EditarCategoriaComponent},
  //{path:'crear', component: CrearCategoriaComponent},/:id
  //{path:'formCategorias', component:FormCategoriasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
