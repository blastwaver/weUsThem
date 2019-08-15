import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { EmailService } from 'src/app/api/email.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


export interface EmailElement {
  id: string;
  message: number;
  subject: number;
  recipient: string;
  date: string;
}

/** @title Responsive sidenav */
@Component({
  selector: 'app-sender',
  templateUrl: 'app-sender.component.html',
  styleUrls: ['app-sender.component.scss'],
})
export class AppSenderComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['select', 'date', 'recipient', 'subject'];
  dataSource;
  selection = new SelectionModel<EmailElement>(true, []);
  ELEMENT_DATA;
  selectedRows = [];
  constructor(private emailService: EmailService,
              private dataService: DataService,
              private router: Router ) {}

  ngOnInit() {
    this.emailService.getAllSentEmails().subscribe(res => {
      this.ELEMENT_DATA = res;
    });
    console.log(this.ELEMENT_DATA);
    this.dataSource = new MatTableDataSource<EmailElement>(this.ELEMENT_DATA);

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectedRows = [];
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.selectedRows = this.ELEMENT_DATA;
    }
    console.log(this.selectedRows);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EmailElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  checkSelect(row) {
    const item = this.selectedRows.find( selectedRow => selectedRow.id === row.id);
    if (item) {
      this.selectedRows = this.selectedRows.filter(selectedRow => selectedRow.id !== item.id);
    } else {
      this.selectedRows.push(row);
    }
    console.log(this.selectedRows);
  }

  rowSelect(row) {
    console.log();
    console.log(row);
  }

  applyFilter(filterValue: string) {
    const newData = this.ELEMENT_DATA.filter(data => data.recipient.includes(filterValue));
    this.dataSource = new MatTableDataSource<EmailElement>(newData);
  }


  deletEmail() {

  }

  writeEmail() {
    const senders = this.selectedRows.map(row => row.sender);
    this.dataService.setEmails(senders);
    this.router.navigateByUrl('/write');
  }

  ngOnDestroy() {

  }


}
