import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: any;
  data: any;
  users = new Users();

  constructor(

    private route : ActivatedRoute,
    private user : UsersService,
    private router : Router
  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.user.getUsersBy(this.id).subscribe(res => {
       //console.log(res);
       this.data = res;
       this.users = this.data;
    })

  }


  updateData(){
      this.user.updateUsers(this.id, this.users).subscribe(res => {
        console.log(res);
        alert("Usuario Actualizado");
        this.router.navigate(['']);
      })
  }

}
