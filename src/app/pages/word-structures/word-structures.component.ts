import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'word-structures.component.html',
  styleUrls: [ 'word-structures.component.css']
})
export class WordStructuresComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
