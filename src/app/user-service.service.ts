import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { User } from '../app/model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User;
  apiUrl = environment.API_BASE_URL;
  accessToken = environment.ACCESS_TOKEN;

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>(this.apiUrl + '/public/v2/users?access-token='+ this.accessToken);
  }

  public getUserById(userId) {
    return this.http.get<User>(this.apiUrl + '/public/v2/users/'+ userId +'?access-token='+ this.accessToken);
  }

  public createUser(userData) {
    return this.http.post<User>(this.apiUrl + '/public/v2/users?access-token='+ this.accessToken, userData);
  }

  public updateUser(userData) {
    return this.http.patch<User>(this.apiUrl +'/public/v2/users/'+ userData.id +'?access-token='+ this.accessToken,userData);
  }

  public deleteUser(userId) {
    return this.http.delete(this.apiUrl +'/public/v2/users/'+ userId +'?access-token='+ this.accessToken);
  }
}
