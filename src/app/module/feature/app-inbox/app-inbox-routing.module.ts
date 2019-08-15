// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInboxComponent } from './app-inbox.component';

// Service

const routes: Routes = [
  {
    path: '',
    component: AppInboxComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppInboxRoutingModule {}
