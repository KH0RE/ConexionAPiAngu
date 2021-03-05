import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RolsComponent } from './rols/rols.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Rols } from './models/rols';
import { RolsModule } from './rols/rols.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [

  { path: '', component: UsersComponent  },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'rol', component: RolsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolsComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
