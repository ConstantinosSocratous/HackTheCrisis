import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public tabIndex = 3
  public tabPages = [
    {
      title: 'PROFILE',
      url: 'comingsoon',
      icon: '../assets/PROFILE.png'
    },
    {
      title: 'CALENDAR',
      url: 'comingsoon',
      icon: '../assets/CALENDAR.png'
    },
    {
      title: 'HISTORY',
      url: 'comingsoon',
      icon: '../assets/HISTORY.png'
    },
    {
      title: 'SERVICES',
      url: 'home',
      icon: '../assets/SERVICES.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private user: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.tabSelected(3)
  }

  tabSelected(i){
    this.tabIndex = i;
  }

  isAuthenticated(){
    return this.authService.isLoggedIn
  }

  logout(){
    this.authService.isLoggedIn = false
    this.router.navigate([''])
  }
}
