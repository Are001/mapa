import { Component, EventEmitter, input, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { usuariosDTC } from '../../usuarios/usuarios';

@Component({
  selector: 'app-agregar-usuario',
  standalone: false,
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent implements OnInit{
  constructor(private router:Router, private fomrbuilder: FormBuilder){}
  
  form: FormGroup | undefined;
  ///@input
  //modelo:usuarioCreacionDTO;

  @Output()
  enviarU: EventEmitter<usuariosDTC> = new EventEmitter<usuariosDTC>();

  ngOnInit(): void {
    this.form = this. fomrbuilder.group({
    });

    //console.log("Holas");

    
  }

  public enviar(){
    //this.router.navigate(['/mapa']);
    this.enviarU.emit(this.form?.value);
    console.log("Programacion");
  }

}
