import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    templateUrl: 'phoneme-list-all.component.html',
    styleUrls: ['phoneme-list-all.component.css',
        '../main.css']
})

export class ListComponent implements OnInit, OnDestroy {
    instruction: HTMLAudioElement;

    constructor() {

    }

    ngOnInit() {
        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
    }

    ngOnDestroy() {
        this.instruction.pause();
    }

    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }
}