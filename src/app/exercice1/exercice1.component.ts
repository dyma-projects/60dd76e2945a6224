import { Component, OnInit } from '@angular/core';
export enum CounterOperations {
  MINUS = '-',
  PLUS = '+'
}
@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  constructor() { }

  ngOnInit() {
  }

  updateCounter(operation: string) {
    console.log(operation);

    if (operation === '-') {
      this.compteur --
    } else {
      this.compteur ++;
    }
  }

}
