import {Component} from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {
  phonics: HTMLAudioElement;

  constructor() {

  }

  playAudio(event) {
    if (event.target.id == 'phonics') {
      this.phonics = new Audio();
      this.phonics.src = '/assets/audio/buttons/phonics.mp3';
      this.phonics.load();
      this.phonics.play();
    } else if (event.target.id == 'alphabet') {
      this.phonics = new Audio();
      this.phonics.src = '/assets/audio/buttons/alphabet_letters.mp3';
      this.phonics.load();
      this.phonics.play();
    }
  }
}
