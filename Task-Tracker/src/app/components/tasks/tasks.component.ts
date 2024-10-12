import { Component } from '@angular/core';
import { TasksComponent } from "./components/tasks/tasks.component";
import { TASKS, Tasks} from "../../mock-tasks";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnIint(): void {}
}
