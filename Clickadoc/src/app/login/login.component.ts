import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loader: any = null 
  logoPath = "../../assets/logo.png"

  constructor(private auth: AuthService, private router: Router, private loadingController: LoadingController) {
    
   }

  ngOnInit() {
    if(this.auth.isLoggedIn){
      this.navigateTo('home')
    }
  }

  navigateTo(path){
    this.router.navigate([path])
  }

  login(form){
    let values = form.value
    let result = this.auth.login(values.gesy, values.password)

    if(result){
      this.navigateTo('home')
    }
  }


}
