import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!:string;
  day!:string
  reminder:boolean=false


  @Output() onFormSubmit= new EventEmitter()
  constructor() { }

  
  ngOnInit(): void {
  }



  onSubmit(){
    //checking for empty submission
    if(!this.text){
      alert("Please enter the Task")
      return
    }
    const newTask={
      text: this.text,
      day:this.day,
      reminder:this.reminder
    }

    //clearing the form
    this.text=""
    this.day=""
    this.reminder=false 


    this.onFormSubmit.emit(newTask)


  }

}
