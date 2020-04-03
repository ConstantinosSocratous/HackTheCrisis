import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page1Component } from './menuPages/page1/page1.component';
import { Page2Component } from './menuPages/page2/page2.component';
import { TabPage1Component } from './tabPages/tab-page1/tab-page1.component';
import { TabPage2Component } from './tabPages/tab-page2/tab-page2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'tabpage1',
    component: TabPage1Component
  },
  {
    path: 'tabpage2',
    component: TabPage2Component
  },

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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
