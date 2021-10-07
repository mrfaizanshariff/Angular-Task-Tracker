import { Component, OnInit } from '@angular/core';
// import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  title:string="Task Tracker"

  showAddTask!:boolean;
  subscription!:Subscription;

  
  constructor() { }


  toggleAddTask(){
    console.log('toggle');
    // this.uiService.toggleAddTask()
  }

  ngOnInit(): void {
  }

}
