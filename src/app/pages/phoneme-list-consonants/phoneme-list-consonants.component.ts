import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from '../../components/card/card.component';

@Component({
    templateUrl: 'phoneme-list-consonants.component.html',
    styleUrls: ['phoneme-list-consonants.component.css',
        '../../main.css']
})

export class PhonemeListConsonantsComponent implements OnInit, OnDestroy {
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
    phonemes = ['b','c','c','d','f','g','g','h','j','k','l','m','n','p','r','s','s','t','v','w','x','y','z']
}
