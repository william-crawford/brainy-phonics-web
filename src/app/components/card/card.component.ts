import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div class="app-card"><ng-content></ng-content></div>',
})

export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
