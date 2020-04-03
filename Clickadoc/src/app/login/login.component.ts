import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authSerice: AuthService, private router: Router) {
    
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log('here')
    if(this.authSerice.isLoggedIn){
      console.log('here')

      this.router.navigate['page1']
    }
  }
}
