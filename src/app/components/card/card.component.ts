import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<div>Card: {{name}}</div>`,
  styles: [`
  :host {
    display: block;
    padding: 32px;
    border: 3px solid black;
    border-radius: 8px;
  }
  `]
})

export class CardComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }

}
