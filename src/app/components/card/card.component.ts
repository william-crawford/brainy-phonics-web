import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<div>{{phoneme}}</div>`,
})

export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}