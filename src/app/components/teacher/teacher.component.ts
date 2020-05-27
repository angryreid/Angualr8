import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TeacherDesc {
  name: string;
  title: string;
  age: number;
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less'],
})
export class TeacherComponent implements OnInit {
  
  @Input()teacherList: TeacherDesc[] = [];
  @Output()clickEmit = new EventEmitter;
  selectedIndex: number = -1;
  constructor() {}

  ngOnInit(): void {}

  handleClick(teacher: TeacherDesc, index: number){
    this.selectedIndex = index;
    this.clickEmit.emit(teacher);
  }
}
