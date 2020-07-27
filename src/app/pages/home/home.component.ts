import {Component} from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {
  audio: HTMLAudioElement;
  hovering: boolean;
  timer: any;

  constructor() {
    
  }

 
  playAudio(event) {
    this.hovering = true;
    this.timer = setTimeout( () =>  {
      if (this.hovering) {
        this.audio = new Audio();
        if (event.target.id === 'secret-stuff') {
          this.audio.src = '/assets/audio/buttons/' + event.target.id + '.m4a';
        } else {
          this.audio.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        }
        if (this.audio.src !== undefined) {
          this.audio.load();
          this.audio.play();
        }
      }
    }, 400);
  }

  stopAudio() {
    this.hovering = false;
    if(this.audio.src !== undefined){
      this.audio.pause();
      this.audio.currentTime = 0.0;
    }
    clearTimeout(this.timer)
  }
}
