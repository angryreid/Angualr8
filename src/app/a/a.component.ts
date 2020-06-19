import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  @Input() title = "a works!"
  @Output() onTitleChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTitleClick(){
    this.onTitleChange.emit();
  }

}
