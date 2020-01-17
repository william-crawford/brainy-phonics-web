import {Component} from '@angular/core';

@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.css',
                 '../../main.css' ]
})

export class HomeComponent {
    phonics: HTMLAudioElement;

    constructor() {

    }

    playAudio() {
        this.phonics = new Audio();
        this.phonics.src = '/assets/audio/phonics.mp3';
        this.phonics.load();
        this.phonics.play();
    }
}
