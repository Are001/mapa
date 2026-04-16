import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL = 'http://localhost:4200/categorias';

  constructor(private http:HttpClient) { }

  public obtenerTodos(){
    return this.http.get(this.apiURL);
  }
}
