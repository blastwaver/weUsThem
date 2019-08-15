// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppArchiveComponent } from './app-archive.component';

// Service

const routes: Routes = [
  {
    path: '',
    component: AppArchiveComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppArchiveRoutingModule {}
