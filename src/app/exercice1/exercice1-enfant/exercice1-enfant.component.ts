import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output('eUpdateCounter') public eventUpdateCounter: EventEmitter<string> = new EventEmitter();
  @Input() public result: number;
  constructor() { }

  ngOnInit() {
  }

}
