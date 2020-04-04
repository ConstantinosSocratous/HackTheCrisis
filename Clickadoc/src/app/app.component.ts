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
  public menuIndex = 0;
  public appPages = [
    {
      title: 'My Account',
      url: 'home',
      icon: 'home' 
    },
    {
      title: 'Past Appointments',
      url: 'page1',
      icon: 'archive'
    },
    {
      title: 'Health Services',
      url: 'page2',
      icon: 'medkit'
    },
    
  ];

  public tabIndex = -1
  public tabPages = [
    {
      title: 'Notes',
      url: 'notes',
      icon: 'send-outline'
    },
    {
      title: 'Book',
      url: 'book',
      icon: 'calendar-outline'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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
    // this.menuSelected(0)
    // this.router.navigate['page1']

    // const path = window.location.pathname.split('folder/')[0];
    // if (path !== undefined) {
    //   this.menuIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  menuSelected(i){
    this.menuIndex = i;
    this.tabIndex = -1;
    // console.log(this.menuIndex + " || " + this.tabIndex);
  }

  tabSelected(i){
    this.menuIndex = -1;
    this.tabIndex = i;
    // console.log(this.menuIndex + " || " + this.tabIndex);  
  }

  isAuthenticated(){
    return this.authService.isLoggedIn
  }

  logout(){
    this.authService.isLoggedIn = false
    this.router.navigate([''])
  }
}
