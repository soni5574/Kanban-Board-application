import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNewPageComponent } from 'src/app/components/add-new-page/add-new-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(title : string) {
    // this.dialog.open(DialogComponent,{
    //   width:'30%'
    // });
    const dialogRef = this.dialog.open(AddNewPageComponent,{
      width: '50%',
      data: {
        title:title
      }
    });
  }

  openTaskPage() {
    const title = "Add new task "
    this.openDialog (title);
  }
}
