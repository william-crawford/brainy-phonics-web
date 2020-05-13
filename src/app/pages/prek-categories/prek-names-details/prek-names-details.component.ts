import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'prek-names-details.component.html',
    styleUrls: [ 'prek-names-details.component.css']
})

export class PrekNamesDetailsComponent {
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
