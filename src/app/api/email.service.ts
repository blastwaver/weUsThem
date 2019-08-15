import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {of as observableOf,  Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
  // host = `${window.location.protocol}//${window.location.host}`;
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  public getAllEmails() {
      const data = MOCK_DATA;
      // return this.httpClient.get(`${this.env.host}/api/main`);
      return observableOf(data);
  }

  public deleteEmail(id) {
    return observableOf(true);
  }

  public getArchivedEmails() {
    const data = MOCK_DATA.filter( mail => mail.archive === true );
    // return this.httpClient.get(`${this.env.host}/api/main`);
    return observableOf(data);
  }

  public updateArchive(id, archive) {
    return observableOf(true);
  }

  public getAllSentEmails() {
    const data = MOCK_DATA2;
    return observableOf(data);
  }

  public deleteSentEmail(id) {
    return observableOf(true);
  }

  public sendEmail(data) {
    return observableOf(true);
  }
}

const MOCK_DATA = [
  {id: 1, message: 'sssssssssss', subject: 'smile', sender: 'xxx@gmail.com', date: '2019/08/11', archive: true},
  {id: 2, message: 'aaaaaaaaa', subject: 'smile', sender: 'sasa@gmail.com', date: '2019/08/12', archive: false},
  {id: 3, message: 'bbbbbbbbbb', subject: 'smile', sender: 'ssss@gmail.com', date: '2019/08/13', archive: false},
  {id: 4, message: 'ccccccccccccc', subject: 'smile', sender: 'nice@gmail.com', date: '2019/08/13', archive: false},
  {id: 5, message: 'sssssssssssss', subject: 'smile', sender: 'xxx@gmail.com', date: '2019/08/13', archive: true},
  {id: 6, message: 'xxxxxxxxxxxx', subject: 'smile', sender: 'sasa@gmail.com', date: '2019/08/14', archive: false},
  {id: 7, message: 'xxxxxxxxxxxx', subject: 'smile', sender: 'ssss@gmail.com', date: '2019/08/15', archive: true},
  {id: 8, message: 'xxxxxxxxxxxxxxx', subject: 'smile', sender: 'nice@gmail.com', date: '2019/08/15', archive: false},
];

const MOCK_DATA2 = [
  {id: 1, message: 'sssssssssss', subject: 'smile', recipient: 'xxx@gmail.com', date: '2019/08/11' },
  {id: 2, message: 'aaaaaaaaa', subject: 'smile', recipient: 'sasa@gmail.com', date: '2019/08/12'},
  {id: 3, message: 'bbbbbbbbbb', subject: 'smile', recipient: 'ssss@gmail.com', date: '2019/08/13'},
  {id: 4, message: 'ccccccccccccc', subject: 'smile', recipient: 'nice@gmail.com', date: '2019/08/13'},
  {id: 5, message: 'sssssssssssss', subject: 'smile', recipient: 'xxx@gmail.com', date: '2019/08/13'},
  {id: 6, message: 'xxxxxxxxxxxx', subject: 'smile', recipient: 'sasa@gmail.com', date: '2019/08/14'},
  {id: 7, message: 'xxxxxxxxxxxx', subject: 'smile', recipient: 'ssss@gmail.com', date: '2019/08/15'},
  {id: 8, message: 'xxxxxxxxxxxxxxx', subject: 'smile', recipient: 'nice@gmail.com', date: '2019/08/15'},
];

