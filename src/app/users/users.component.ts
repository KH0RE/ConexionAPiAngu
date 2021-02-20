import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  constructor(

      private user : UsersService

  ) { }

  nombreUsuario: any;
  nombreCompleto: any;
  email: any;
  telefono: any;

  ngOnInit() {

  }



  crear(){
    let data = {
      "nombreUsuario": this.nombreUsuario,
      "nombreCompleto": this.nombreCompleto,
      "email": this.email,
      "telefono": this.telefono
    }
    this.user.crearUser(data).subscribe(
      response => {
        console.log('Creado')
        alert("Usuario Creado")

      }, error => console.log(error)
    )
  }
  

}
