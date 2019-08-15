import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';
import { AppArchiveComponent } from './app-archive.component';
import { AppArchiveRoutingModule } from './app-archive-routing.module';
import { EmailService } from 'src/app/api/email.service';
// import { AppSenderComponent } from './app-archive.component';
// import { AppSenderRoutingModule } from './app-archive-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppArchiveRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppArchiveComponent,
  ],
  exports: [
    AppArchiveComponent,
    CommonModule
  ],
  providers: [
    EmailService
  ]
})

export class AppArchiveModule { }
