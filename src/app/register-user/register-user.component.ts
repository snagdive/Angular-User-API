import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user = new User();
  isRegistered = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user.dob = new Date();
    this.user.doj = new Date();
  }

  onSubmit(): void {
    // save User in database
    this.userService.registerUser(this.user)
        .subscribe(
          data=>{
          console.log(data);
          this.isRegistered = true;
          this.user = data;
          this.showUsersList();
        },
        error=> {console.log(error)}
        );
  }

  showUsersList() {
    this.router.navigate(['/users']);
  }

}
