import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: Observable<User[]>;
  searchBy!:string;
  searchValue!:string;
  sortBy!: string;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this.users = this.userService.getAllUsers();
  }

  loadSortedList() {
    this.users = this.userService.sortUsers(this.sortBy);
  }

  userDetails(id:number) {
    console.log(id);
    this.router.navigate(['/users',id]);
  }

  userDelete(id:number, type:string) {
    this.userService.deleteUser(id,type)
      .subscribe(()=>{this.loadUserList()},error => console.log(error)); 
  }

  register() {
    this.router.navigate(['/register']);
  }

  userSearch() { 
    console.log("Search By: "+this.searchBy+" SearchValue : "+this.searchValue)
    this.users = this.userService.searchUser(this.searchBy,this.searchValue)
  }

  sort()
  {
    console.log("Sort() called : "+this.sortBy)
    this.loadSortedList()
  }

  refresh() {
    this.searchBy = "";
    this.searchValue = "";
    this.sortBy = "";
    this.loadUserList();
  }

}
