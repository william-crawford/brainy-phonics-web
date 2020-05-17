import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'second-consonants-details.component.html',
    styleUrls: ['second-consonants-details.component.css']
})

export class SecondConsonantsDetailsComponent {
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