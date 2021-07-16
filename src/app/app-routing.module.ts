import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'register', component:RegisterUserComponent},
  { path: 'users', component:UserListComponent},
  { path: 'users/:id', component:UserComponent},
  { path: 'update/:id', component:UpdateUserComponent},
  { path:'', redirectTo:'/users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
