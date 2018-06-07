import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() sendTask = new Task(description, priority);
  submitForm(description: string, priority: number) {
    let newTask: Task = new Task(description, parseInt(priority));
    this.sendTask.emit()
  }
}
