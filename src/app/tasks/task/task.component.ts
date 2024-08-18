import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './taks.module';
import { CardComponent } from '../../ui/card/card.component';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
