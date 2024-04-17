import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNewPageComponent } from '../add-new-page/add-new-page.component';
import { State, Store } from '@ngrx/store';
import { removeTask } from 'src/app/store/task.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  // taskArry : any[] =[
  //   {
  //     taskid: 'id01',
  //     taskName: "Task 01",
  //     status: 'In Progress'
  //   },
  //   {
  //     taskid: 'id02',
  //     taskName: "Task 02",
  //     status: 'To Do'
  //   },{
  //     taskid: 'id03',
  //     taskName: "Task 03",
  //     status: 'Done'
  //   },
  //   {
  //     taskid: 'id04',
  //     taskName: "Task 04",
  //     status: 'In Progress'
  //   },{
  //     taskid: 'id05',
  //     taskName: "Task 05",
  //     status: 'To Do'
  //   },{
  //     taskid: 'id06',
  //     taskName: "Task 06",
  //     status: 'Done'
  //   },{
  //     taskid: 'id07',
  //     taskName: "Task 07",
  //     status: 'Done'
  //   },{
  //     taskid: 'id08',
  //     taskName: "Task 08",
  //     status: 'In Progress'
  //   },{
  //     taskid: 'id09',
  //     taskName: "Task 09",
  //     status: 'To Do'
  //   },{
  //     taskid: 'id010',
  //     taskName: "Task 010",
  //     status: 'In Progress'
  //   },
  //   {
  //     taskid: 'id011',
  //     taskName: "Task 11",
  //     status: 'To Do'
  //   },
  // ] // Information array

  currentTask :any; // extra veriable to store the currect state of the draging item.
  taskArry: any [] =[];
  //taskState$: Observable<TaskState[]> = this.store.select(state =>state.tasks);
  
  constructor( 
    private dataService : DataService,
    public dialog: MatDialog,
    private store: Store<{ tasks: TaskState }>
  ) {
    //this.taskArry = [];
    //this.savedValues = this.data.getData();
   }

  // ngOnInit(): void {
  //  this.taskArry = this.dataService.getData()
  //  console.log("TTTTTTTTTTTTTTTTTT")
  // }

  filterTask (status :string) {
    return this.taskArry.filter(m=>m.status == status); //Filer the data so that we can place items based on the status of the item
  }//We have 3 colum 'To Do', 'In Progress' and 'Done' this fitetr filters data hence we can place it into correcponding place

  onDragstart(task: any) {
    this.currentTask = task; // this function will trigger when an item drgae for the currect position.
  }

  onDrop(event: any, status: string){ // Parent colum, this function will triger whan an item is trop in to the colum.
    event.preventDefault();
    const record = this.taskArry.find(m=>m.taskid == this.currentTask.taskid);
    if(record != undefined){
      record.status = status;
    }
    }

  onDragover(event: any){
    event.preventDefault();
  }

  addData(data: any){
    // const enhancedData = {
    //   taskid: '#TASKID' + this.taskArry[this.taskArry.length] + 1,
    //   taskName: data,
    //   status: 'To Do'

    // }
    // this.taskArry.push(enhancedData)
  } 
  editTask(item: any){
    console.log("edit")
    const title = "Edit task"
   this.openDialog (title, item);
  }
  deleteTask(taskId: string){
    console.log('delete')
    this.store.dispatch(removeTask({taskId}));
  }
  openDialog(title : string, data: any) {
    // this.dialog.open(DialogComponent,{
    //   width:'30%'
    // });
    const dialogRef = this.dialog.open(AddNewPageComponent,{
      width: '50%',
      data: {
        title:title,
        data: data
      }
    });
  }


  // deleteTask(taskId: string): void {
  //   this.store.dispatch(removeTask({ taskId }));
  // }

}
