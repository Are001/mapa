import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from '../categorias/categorias';

const url = 'https://localhost:7279/' + 'Categorias';
const url2   = 'https://localhost:7279/' + 'eliminarCategorias';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
//cargar categoria.
  postConsultarPoliza(): Observable<any> {
    return this.http.get(url);
  }

  //metodo post elimitar, editar por medio de un metodo post, get es incorecto por la vunerabilidad de los datos.
  //accion que elimine registros por id.
  //controlador eliminar categoria por metodo post, modelo idCategoria.
  //eliminar categoria en categoriasService. recibe request
  //parametro, json
    eliminarCategoria(request:any): Observable<any> {
    
    return this.http.post(url2, request );
  }
}
