import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //assigning the mock TASKS array our own tasks property
  tasks: Task[]= []


  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks= this.tasks.filter(t=>(t.id !== task.id))))

  }

  reminderSet(task:Task){
    task.reminder= !task.reminder
    // console.log(task.reminder);
    this.taskService.updateReminder(task).subscribe() 

  }

  addTask(task:Task){
    console.log(task);
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)))
  }
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

    this.taskService.getTask().subscribe((taskObservable)=>this.tasks=taskObservable)
  }


}
