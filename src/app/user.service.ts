import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers() : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getUser(id : number) : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  registerUser(user: User) : Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  updateUser(id: number, user: User) : Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,user);
  }

  deleteUser(id : number,type: string) : Observable<any> {
    let data = {"type":type}
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`, {params:data} );
  }

  sortUsers(sortBy: string) : Observable<any>
  {
    let data = {"sortBy":sortBy}
    return this.httpClient.get(`${this.baseUrl}/sortedlist`, {params:data});
  }

  searchUser(searchBy:string, searchValue:string) : Observable<any> {
    let param = {'searchBy':searchBy, 'searchValue':searchValue}
    return this.httpClient.get(`${this.baseUrl}/findby`, {params:param} );
  }

}
