import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'third-vowelconsonants-details.component.html',
    styleUrls: ['third-vowelconsonants-details.component.css']
})

export class ThirdVowelconsonantsDetailsComponent {
    category: HTMLAudioElement;

    constructor(private location: Location) {
    }

    playAudio(event) {
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
