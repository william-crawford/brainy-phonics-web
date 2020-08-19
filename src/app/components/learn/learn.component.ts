import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  wsData$: Observable<any>;
  index = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.wsData$ = this.http.get('assets/json/word-structures.json');
  }

  getImagePath(word: string) {
    return `assets/img/word-structures/${word}.png`;
  }

  updateIndex(type: string, arrayLength: number) {
    switch (type) {
      case 'back':
        this.index = this.index > 0 ? this.index - 1 : this.index;
        break;
      case 'forward':
        this.index = this.index < arrayLength - 1 ? this.index + 1 : this.index;
        break;
    }
  }
}
