import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'third-vowels-details.component.html',
  styleUrls: ['third-vowels-details.component.css']
})
export class ThirdVowelsDetailsComponent {
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
