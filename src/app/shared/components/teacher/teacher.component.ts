import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

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
export class TeacherComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() teacherList: TeacherDesc[] = [];
  @Output() clickEmit = new EventEmitter();
  @ViewChild('teacherTitle', { static: true }) teacherTitleDom: ElementRef; // static true means no ngIf | ngFor
  @ViewChildren('li') liItems: QueryList<ElementRef>; // get many HTML tags;

  selectedIndex: number = -1;
  inputValue: string = '123';
  @Emoji()
  emoji = 'come on!';

  constructor() {
    console.log('constructor');
  }

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error("Method not implemented.");
    console.log(changes);
  }

  /**
   * life circle
   */
  ngOnInit(): void {
    console.log('init');
    console.log(this.teacherTitleDom);
  }

  ngAfterContentInit(): void {
    console.log('ng-content tag works');
  }

  ngAfterContentChecked(): void {
    // throw new Error("Method not implemented.");
  }

  ngAfterViewInit(): void {
    // rander perfectly.
    console.log('view init');
    console.log(this.liItems);
  }

  ngAfterViewChecked(): void {
    //
    console.log('view checked');
  }

  ngOnDestroy(): void {
    console.log('before destroy');
  }

  // @Confirmable('Do you want to go?')
  handleClick(teacher: TeacherDesc, index: number) {
    this.selectedIndex = index;
    console.log(this);
    this.clickEmit.emit(teacher);
  }
}
