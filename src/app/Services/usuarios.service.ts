import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuariosDTC } from '../usuarios/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl='https://localhost:7016/api/usuarios';

  constructor(private http:HttpClient) { }
  
//public obteneTodos(): usuariosDTC[] {
  //return this.http.get(this.apiUrl);
  
  //}

  obtenerUsuarios(): Observable<usuariosDTC[]>{
    return this.http.get<usuariosDTC[]>(this.apiUrl);
  }

  public crear (usuario: usuariosDTC){
    return this.http.post(this.apiUrl, usuario);
  }


}
