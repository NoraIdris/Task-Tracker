import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { tasksComponent } from "./components/tasks/tasks.component";
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./components/header/header.component";
// import { TasksComponent, tasksComponent } from "./components/tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
 // imports: [RouterOutlet, HeaderComponent, TasksComponent, tasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, tasksComponent]
})
export class AppComponent {

}
