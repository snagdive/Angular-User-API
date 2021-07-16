import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id!: number;
  user!: User;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new User();

    this.userService.getUser(this.id)
      .subscribe(user => {this.user = user;}, error => {console.log(error)});
  }

  list()  {
    this.router.navigate(['/users']);
  }

  userUpdate(id:number) {
    this.router.navigate(['/update', id]);
  }

}
