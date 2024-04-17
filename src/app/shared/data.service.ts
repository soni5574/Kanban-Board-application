import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataArray: any[] = [
    {
      taskid: '001',
      taskName: "Application layout",
      status: 'In Progress'
    },
    {
      taskid: '002',
      taskName: "Add new task",
      status: 'To Do'
    },{
      taskid: '003',
      taskName: "Edit task",
      status: 'Done'
    },
    {
      taskid: '004',
      taskName: "landing page layout",
      status: 'In Progress'
    },{
      taskid: '005',
      taskName: "Performance testing",
      status: 'To Do'
    },{
      taskid: '006',
      taskName: "Drag and drop functionality",
      status: 'Done'
    },{
      taskid: '007',
      taskName: "Page login",
      status: 'Done'
    },{
      taskid: '008',
      taskName: "Security implementation",
      status: 'In Progress'
    },{
      taskid: '009',
      taskName: "Footer content",
      status: 'To Do'
    },{
      taskid: '010',
      taskName: "Brard layout",
      status: 'In Progress'
    },
    {
      taskid: '011',
      taskName: "Repo migration",
      status: 'To Do'
    },
  ];

  constructor() { }

  addData(data: any) {
    this.dataArray.push(data);
  }

  getData(): any[] {
    return this.dataArray;
  }
}
