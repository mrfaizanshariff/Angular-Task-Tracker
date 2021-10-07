import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
// import { TASKS } from '../mock-task';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) { }

  private apiUrl= "http://localhost:5000/tasks"

  getTask():Observable<Task[]>{
    // const taskObservable = of(TASKS)
    // return taskObservable
    return this.http.get<Task[]>(this.apiUrl)
    // this is coming from our server
  }


  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}
