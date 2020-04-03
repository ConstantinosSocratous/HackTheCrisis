import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  isLoggedIn: boolean = true

  constructor(private router: Router) { }

  canActivate(){
    if(!this.isLoggedIn){
      this.router.navigate['login']

      return false;
    }

    return true;
  }
}
