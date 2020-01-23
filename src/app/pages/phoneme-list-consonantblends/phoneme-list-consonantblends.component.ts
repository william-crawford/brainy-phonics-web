import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from '../../components/card/card.component';

@Component({
    templateUrl: 'phoneme-list-consonantblends.component.html',
    styleUrls: ['phoneme-list-consonantblends.component.css',
        '../../main.css']
})

export class PhonemeListConsonantBlendsComponent implements OnInit, OnDestroy {
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
    phonemes = ['bl','br','ch','cl','cr','dr','fl','fr','gl','gr','nd','ng','nk','pl','pr','sh','sk','sl','sp','st','sw','th','th','tr','wh'];
}
