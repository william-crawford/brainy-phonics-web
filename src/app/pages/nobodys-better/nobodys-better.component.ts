import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'nobodys-better.component.html',
  styleUrls: ['nobodys-better.component.css']
})
export class NobodysBetterComponent {

  constructor(private location: Location) {

  }

  replayVideo() {
    var temp = <HTMLVideoElement> document.getElementById('nobodys-better');
    temp.pause();
    temp.currentTime = 0;
    temp.load();
  }

  goBack() {
    this.location.back();
  }
}
