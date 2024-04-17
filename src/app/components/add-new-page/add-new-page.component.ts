import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.scss']
})
export class AddNewPageComponent implements OnInit {
  infoForm!: FormGroup;
  randomId : number = 0;
  taskStatu: string ='';
  title: string = "Add new task"
  

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialog,
    private snackBar: MatSnackBar,
    private dataService : DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
      this.infoForm = this.fb.group({
        name: ['']
      });
      this.title = this.data.title
  }
    onNoClick(): void {
      this.dialogRef.closeAll();
    }

  save(): void {
    if(this.infoForm.valid){
      this.getTaskid();
      this.taskStatu = 'To Do'
      const enhancedData = {
        taskid:this.randomId,
        taskName : this.infoForm.value.name,
        status:this.taskStatu
      }
      this.dataService.addData(enhancedData);
      this.showNotification('Form details saved successfully!');
      this.dialogRef.closeAll();
    }
    
  }

  showNotification(message: string, action: string = '', duration: number = 500): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'right', // Position horizontally at the right
      verticalPosition: 'top', // Position vertically at the top
    });
  }

  getTaskid() :number {
    return this.randomId = Math.floor(Math.random() * 100);
  }
}
