import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppInboxRoutingModule } from './app-inbox-routing.module';
import { AppInboxComponent } from './app-inbox.component';
import { MaterialModule } from 'src/app/material.module';
import { EmailService } from 'src/app/api/email.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppInboxRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppInboxComponent,
  ],
  exports: [
    AppInboxComponent,
    CommonModule
  ],
  providers: [
    EmailService
  ]
})

export class AppInboxModule { }
