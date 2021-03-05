import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error, stringify } from '@angular/compiler/src/util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RolsService } from '../services/rols.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {

  us: any =[];
  rols: any=[];

  constructor(

      public modal: NgbModal,
      public modalEdit : NgbModal,
      private user : UsersService,
      private role : RolsService

  ) { }

  nombreUsuario: any;
  nombreCompleto: any;
  email: any;
  telefono: any;
  edad: any;
  rol : any;
  descripcion :any;

  ngOnInit(): void {
    this.getUsers();


}


  getUsers() {
    this.user.getUsers().subscribe(data =>{
      this.us = data;
      console.log(data)
    },
      () => console.log('error')
      );
  }

  insertData(){
    let data = {
      "nombreUsuario": this.nombreUsuario,
      "nombreCompleto": this.nombreCompleto,
      "email": this.email,
      "telefono": this.telefono,
      "edad": this.edad,
      "rol": this.rol,
      "descripcion " : this.descripcion
    }
    /*this.role.crearRol(data).subscribe(
      response => {
        console.log('Creado')
        window.location.reload();

      }, error => console.log(error)
    )*/
    this.user.crearUser(data).subscribe(
      response => {
        console.log('Creado')
        window.location.reload();

      }, error => console.log(error)
    )
  }


  deleteData(id : any ) {
      this.user.deleteUsers(id).subscribe(res => {
        alert('Usuario eliminado');
        this.getUsers();
      })
  }




}
