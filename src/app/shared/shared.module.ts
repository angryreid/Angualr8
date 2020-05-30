import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './components/teacher';
import { CoursesComponent } from '../courses.component';
import { MyDirectiveDirective } from './directives';



@NgModule({
  declarations: [
    CoursesComponent,
    TeacherComponent,
    MyDirectiveDirective
  ],
  imports: [
    CommonModule,
    FormsModule // import here for using another place
  ],
  exports: [
    CommonModule,
    FormsModule,
    CoursesComponent,
    TeacherComponent,
    MyDirectiveDirective
  ]
})
export class SharedModule { }
