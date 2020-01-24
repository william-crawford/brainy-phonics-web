import {Component} from '@angular/core';

@Component({ 
    templateUrl: 'phoneme-categories.component.html',
    styleUrls: [ 'phoneme-categories.component.css',
                 '../../main.css' ]
})

export class PhonemeCategoriesComponent {
    vowels: HTMLAudioElement;

    constructor() {

    }

    playAudio() {
    //     this.vowels = new Audio();
    //     this.vowels.src='/assets/audio/vowels.m4a';
    //     this.vowels.load();
    //     this.vowels.play();
    }
}
