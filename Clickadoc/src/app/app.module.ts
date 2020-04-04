import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './menuPages/page1/page1.component';
import { Page2Component } from './menuPages/page2/page2.component';
import { TabPage1Component } from './tabPages/tab-page1/tab-page1.component';
import { TabPage2Component } from './tabPages/tab-page2/tab-page2.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './modals/notes.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './menuPages/home/home.component';

@NgModule({
  declarations: [
    AppComponent, 
    Page1Component, 
    Page2Component, 
    TabPage1Component, 
    TabPage2Component,
    LoginComponent,
    NotesComponent,
    RegisterComponent,
    HomeComponent
  ],
  entryComponents: [NotesComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({animated: false}),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    AuthService,
    PhotoViewer,
    Camera,
    AlertController,
    LoadingController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
