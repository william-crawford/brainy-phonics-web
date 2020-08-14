import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './first-vowels-details.component.html',
  styleUrls: ['./first-vowels-details.component.css']
})
export class FirstVowelsDetailsComponent {
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
