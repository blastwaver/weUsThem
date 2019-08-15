import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DataService {
  emails = null;

  setEmails(emails) {
    this.emails = emails;
  }

  getEmails() {
    return this.emails;
  }

  resetEmails() {
    this.emails = null;
  }

}
