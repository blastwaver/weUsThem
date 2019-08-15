import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';
import { AppSenderComponent } from './app-sender.component';
import { AppSenderRoutingModule } from './app-sender-routing.module';
import { EmailService } from 'src/app/api/email.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppSenderRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppSenderComponent,
  ],
  exports: [
    AppSenderComponent,
    CommonModule
  ],
  providers: [
    EmailService
  ]
})

export class AppSenderModule { }
