import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameControlComponent implements OnInit {
  @Output() numberCreated = new EventEmitter<number>();
  currentNumber = 0;
  ref: number;

  constructor() { }

  ngOnInit() {
  }

  clickStart() {
    this.ref = setInterval(() => {
      this.currentNumber += 1;
      this.numberCreated.emit(this.currentNumber)
    }, 1000);
  }

  clickStop() {
    if (this.ref) {
      clearInterval(this.ref);
      this.ref = undefined;
    }
  }
}
