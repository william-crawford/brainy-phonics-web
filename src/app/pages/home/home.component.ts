import {Component} from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {
  audio: HTMLAudioElement;

  constructor() {

  }

  playAudio(event) {
    if (event.target.id === 'secret-stuff') {
      this.audio = new Audio();
        this.audio.src = '/assets/audio/buttons/' + event.target.id + '.m4a';
        if (this.audio.src !== undefined) {
            this.audio.load();
            this.audio.play();
        }
    } else {
      this.audio = new Audio();
        this.audio.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.audio.src !== undefined) {
            this.audio.load();
            this.audio.play();
        }
    }
  }
}
