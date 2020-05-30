/*
 * @Author: your name
 * @Date: 2020-05-26 14:11:16
 * @LastEditTime: 2020-05-26 14:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hello-world/src/app/app.component.ts
 */ 
import { Component, ViewChild } from '@angular/core';
import { TeacherDesc, TeacherComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  topTeacherList: TeacherDesc[] = [
    {
      name: 'Derek',
      title: 'High Level Teacher',
      age: 18,
    },
    {
      name: 'Emma',
      title: 'High Level Teacher',
      age: 18,
    },
    {
      name: 'Amy',
      title: 'Mid Level Teacher',
      age: 18,
    },
  ];
  @ViewChild(TeacherComponent) teacherComp: TeacherComponent;
  handleTeacherClick(teacher: TeacherDesc){
    console.log(teacher);
  }
}
