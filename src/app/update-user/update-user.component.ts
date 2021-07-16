import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!:number;
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id)
        .subscribe(
          user =>{
            console.log("DOB: "+user.dob);
            
            this.user = user
          },
          error=>{console.log(error)}
        );
  }

  onSubmit(): void { 
    // Update User details
    this.userService.updateUser(this.id, this.user)
        .subscribe(
          data=>{
            console.log(data);
            this.user = new User();
            this.showUserDetails(this.id);
          },
          error=>{console.log(error)}
        );
   }

  showUserDetails(id:number) {
    this.router.navigate(['/users',id])
  }

}
