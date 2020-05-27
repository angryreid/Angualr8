import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{'Title: ' + title}}</h2>
    <ul>
      <li *ngFor="let course of coursesList">
        {{ course }}
      </li>
    </ul>
    `
})
export class CoursesComponent {
  title = 'List of Courses';
  coursesList;

  constructor(service: CoursesService){
    // let service = new CoursesService();
    this.coursesList = service.getCourses();
  }
}