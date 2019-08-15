import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppWriteComponent } from './module/feature/app-write/app-write.component';
// import { AppPageNotFoundComponent } from './module/feature/app-error/app-page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  {
    path: 'inbox',
    loadChildren: './module/feature/app-inbox/app-inbox.module#AppInboxModule',
    // canActivate: [AuthGuardService],
  },
  {
    path: 'sent',
    loadChildren: './module/feature/app-sender/app-sender.module#AppSenderModule',
    // canActivate: [AuthGuardService],
  },
  {
    path: 'archive',
    loadChildren: './module/feature/app-archive/app-archive.module#AppArchiveModule',
    // canActivate: [AuthGuardService],
  },
  {
    path: 'write',
    component: AppWriteComponent,
    // canActivate: [AuthGuardService],
  },
  // {
  //   path: '**',
  //   component: AppPageNotFoundComponent,
  //   canActivate: [AuthGuardService]
  // },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

