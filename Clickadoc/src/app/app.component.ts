import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public menuIndex = 0;
  public appPages = [
    {
      title: 'page1',
      url: 'page1',
      icon: 'mail'
    },
    {
      title: 'page2',
      url: 'page2',
      icon: 'paper-plane'
    },
    
  ];

  public tabIndex = -1
  public tabPages = [
    {
      title: 'tabpage1',
      url: 'tabpage1',
      icon: 'heart'
    },
    {
      title: 'tabpage2',
      url: 'tabpage2',
      icon: 'archive'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    const path = window.location.pathname.split('folder/')[0];
    if (path !== undefined) {
      this.menuIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
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
}
