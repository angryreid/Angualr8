import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherComponent, TeacherDesc } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router){}
  
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

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
    this.router.navigate(['home', teacher.name])
  }
}
