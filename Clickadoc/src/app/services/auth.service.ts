import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  isLoggedIn: boolean = true

  constructor(private router: Router, private user: UserService) { }

  canActivate(){
    if(!this.isLoggedIn){
      this.router.navigate(['login'])

      return false;
    }

    return true;
  }

  login(gesy, password){
    this.user.gesy = gesy

    this.isLoggedIn = true
    return true // return false when an error occurs
  }

  register(name, email, password, gesy){
    this.user.name = name
    this.user.email = email
    this.user.gesy = gesy

    this.isLoggedIn = true
    return true // return false when an error occurs
  }
}
