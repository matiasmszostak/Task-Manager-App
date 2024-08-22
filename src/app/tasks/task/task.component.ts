import { Component, Input } from '@angular/core';
import { type Task } from './taks.module';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;

  constructor(private taskService: TaskService) {}


  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }

}
