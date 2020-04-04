import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  logoPath = "../../assets/logo.png"
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn){
      this.navigateTo('home')
    }
  }

  navigateTo(path){
    this.router.navigate([path])
  }

}
