import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../pages/models/user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private apiURL = 'https://kreza.herokuapp.com/api/v1/'
  currentUser:User = new User() ;

  constructor(private http: HttpClient) { }


  email(email: any) { 
    
     return this.http.post(this.apiURL + "users/notify", {email : email}) 
       .map((res: Response) => res.json()) 
       .catch((error: any) => Observable.throw(error.json().error || 'error')); 
  
   } 
 
  logout(): void {
    localStorage.clear();
  }

  loginFacebook(token) {
    return this.http.post(this.apiURL + "auth/facebook", {}, { headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    } })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'error'));

  }


  getUser(id) {
    return this.http.get(this.apiURL + "users/" + id).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'error'));

  }
  getLeadership(){
    return this.http.get(this.apiURL + "users/leadboard").map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'error'));
  }
  getUserQuests(token){
    return this.http.get(this.apiURL + "users/quests", { headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    } })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'error'));
  }
 public updateLocalUser(user){
    this.currentUser.id = user.id;
    this.currentUser.firstname = user.first_name;
    this.currentUser.lastname = user.last_name;
    this.currentUser.gender = user.gender;
    this.currentUser.email = user.email;
    this.currentUser.profilePicture = user.photo;
  }
}
