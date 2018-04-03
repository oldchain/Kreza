import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
   token;
  constructor(private userService: UserService, private jwthelper: JwtHelperService) { 
  }


  useJwtHelper() {
    var token = localStorage.getItem('token');
    
    if(!token)
      return;
  }

  decodeTokken(token){
    
    return this.jwthelper.decodeToken(token).id;
  }
  loggedIn() {
    return this.jwthelper.isTokenExpired();
  }
}
