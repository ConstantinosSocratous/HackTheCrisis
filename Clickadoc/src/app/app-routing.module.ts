import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './menuPages/page1/page1.component';
import { TabPage1Component } from './tabPages/tab-page1/tab-page1.component';
import { TabPage2Component } from './tabPages/tab-page2/tab-page2.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ChatComponent } from './chat/chat.component'
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'comingsoon',
    component: ComingsoonComponent,
    canActivate: [AuthService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthService]
  },
  {
    path: 'book',
    component: TabPage2Component,
    canActivate: [AuthService]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthService]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

  // {
  //   path: 'tabs',
  //   children: [
  //     {
  //       path: 'tab1',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('./menuPages/folder.module').then(m => m.FolderPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab2',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('./menuPages/folder.module').then(m => m.FolderPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'tab3',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('./menuPages/folder.module').then(m => m.FolderPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/tab1',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
