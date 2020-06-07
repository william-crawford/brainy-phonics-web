import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'secret-stuff.component.html',
  styleUrls: ['secret-stuff.component.css']
})
export class SecretStuffComponent {

  constructor(private location: Location) {

  }

  replayVideo() {
    var temp = <HTMLVideoElement> document.getElementById('secret-stuff');
    temp.pause();
    temp.currentTime = 0;
    temp.load();
  }

  goBack() {
    this.location.back();
  }
}
