import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() countFromParent = 2;
  @Output()
  changeCountValue: EventEmitter<Number> = new EventEmitter<Number>();

  value =  'lowElevation';
  hidden: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeValue() {
    this.changeCountValue.emit(99999);
  }

}
