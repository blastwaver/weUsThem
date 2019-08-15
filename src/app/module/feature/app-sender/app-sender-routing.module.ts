// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSenderComponent } from './app-sender.component';

// Service

const routes: Routes = [
  {
    path: '',
    component: AppSenderComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSenderRoutingModule {}
