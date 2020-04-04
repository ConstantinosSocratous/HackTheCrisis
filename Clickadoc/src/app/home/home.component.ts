import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  logoPath = "../../assets/logo.png"

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {}

  navigateTo(path){
    this.router.navigate([path])
  }

}
