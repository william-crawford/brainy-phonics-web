import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'k-ending-sounds-details.component.html',
  styleUrls: ['k-ending-sounds-details.component.css']
})
export class KEndingSoundsDetailsComponent {
  category: HTMLAudioElement;

  constructor(private location: Location) {}

  playAudio(event: any) {
    event.preventDefault();
    // this.category = new Audio();
    // this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
    // if (this.category.src !== undefined) {
    //     this.category.load();
    //     this.category.play();
    // }
  }

  goBack() {
    this.location.back();
  }
}
