import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'third-consonants-details.component.html',
    styleUrls: ['third-consonants-details.component.css']
})

export class ThirdConsonantsDetailsComponent {
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