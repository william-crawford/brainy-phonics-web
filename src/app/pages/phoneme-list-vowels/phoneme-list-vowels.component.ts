import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';

@Component({
    templateUrl: 'phoneme-list-vowels.component.html',
    styleUrls: ['phoneme-list-vowels.component.css',
                '../../main.css']
})

export class PhonemeListVowelsComponent implements OnInit, OnDestroy {
    instruction: HTMLAudioElement;

    constructor(private router: Router) {
    
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

    openPhoneme(phoneme) {
        if (phoneme == 1) {
            this.router.navigateByUrl('/a');
        }
    }

    phonemes: { [key: number]: string } =
        {
            1: 'a',
            2: 'a',
            3: 'a',
            4: 'a',
            5: 'e',
            6: 'e',
            7: 'e',
            8: 'i',
            9: 'i',
            10: 'i',
            11: 'o',
            12: 'o',
            13: 'o',
            14: 'u',
            15: 'u',
            16: 'u',
            17: 'y',
            18: 'y'
        };

    sortNull() {

    }
}
