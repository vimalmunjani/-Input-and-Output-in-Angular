import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  value = 'lowElevation';
  name = 'pre filled';
  countInParent = 0;
  count2Way = 700;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.countInParent++;
  }

  decrement() {
    this.countInParent--;
  }

  setHighValue($event) {
    this.countInParent = $event;
  }

  enterFromInputBox(countFromInputBox) {
    this.countInParent = countFromInputBox;
  }

}
