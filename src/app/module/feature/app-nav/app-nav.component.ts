import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';



@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})

export class AppNavComponent implements  OnInit {
  linkItems;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.linkItems = [
      {title: 'Inbox', link: '/inbox'},
      {title: 'Sent', link: '/sent'},
      {title: 'Archive', link: '/archive'},
    ];
  }
}


