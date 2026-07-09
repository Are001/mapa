import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from '../categorias/categorias';

const url    =  'https://localhost:7279/' + 'Categorias';
const url2   =  'https://localhost:7279/' + 'Eliminar';
const url3   =  'https://localhost:7279/' + 'InsertarCategoria';
const url4   =  'https://localhost:7279/' + 'ObtenerIdCategoria';
const url5   =  'https://localhost:7279/' + 'Actualizar';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
//cargar categoria.
  postConsultarPoliza(): Observable<any> {
    return this.http.get(url);
  }

  insertarCategoria(categoria:any): Observable<any> {
    return this.http.post(url3,categoria);
  }

  obtenerIdCategoria(idCategoria:number):Observable<any>{
    return this.http.post(url4, {idCategoria});
  }

  //metodo post elimitar, editar por medio de un metodo post, get es incorecto por la vunerabilidad de los datos.
  //accion que elimine registros por id.
  //controlador eliminar categoria por metodo post, modelo idCategoria.
  //eliminar categoria en categoriasService. recibe request
  //parametro, json
    eliminarCategoria(idCategoria: number): Observable<any> {
    console.log(url2);
    return this.http.post(url2,{idCategoria} );
  }

  actualizarCategoria(idCategoria:number, categoria:any): Observable<any> {
       const input = {
    ...categoria,
    idCategoria: idCategoria

  };
   return this.http.post(url5,input);
    //return this.http.post(url5,{idCategoria}, categoria );
  }
}
