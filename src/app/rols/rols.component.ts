import { Component, OnInit } from '@angular/core';
import { RolsService} from '../services/rols.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-rols',
  templateUrl: './rols.component.html',
  styleUrls: ['./rols.component.css']
})
export class RolsComponent implements OnInit {

  rols: any=[];

  constructor(
    public modal: NgbModal,
    public modalEdit : NgbModal,
    private role : UsersService
  ) {
   }

   nombreUsuario: any;
   nombreCompleto: any;
   email: any;
   telefono: any;
   edad: any;
   rol : any;

  ngOnInit(): void {
    this.getRols();
  }


  getRols(){
    this.role.getUsers().subscribe(data => {
      this.rols = data;
      console.log(data)
    })
  }



}
