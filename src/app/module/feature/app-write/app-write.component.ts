import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/api/email.service';
import { Router } from '@angular/router';

/** @title Responsive sidenav */
@Component({
  selector: 'app-write',
  templateUrl: 'app-write.component.html',
  styleUrls: ['app-write.component.scss'],
})
export class AppWriteComponent implements OnInit, OnDestroy {

  emails;

  emailFormGroup: FormGroup = new FormGroup ({
    recipient: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private dataService: DataService,
              private router: Router,
              private emailService: EmailService) {}

  ngOnInit() {
    this.emails = this.dataService.getEmails();
    console.log(this.emails);
  }


  send() {
    if (this.emailFormGroup.valid) {
      this.emailService.sendEmail(this.emailFormGroup.value).subscribe(res => {
        if (res) {
          this.router.navigateByUrl('/sent');
        }
      });
    }
  }


  ngOnDestroy() {
    this.dataService.resetEmails();
  }

}
