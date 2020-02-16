import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';
import { TransferLetterService } from '../../services/transfer-letter-service.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'phoneme-list-vowelblends.component.html',
    styleUrls: ['phoneme-list-vowelblends.component.css',
        '../../main.css']
})

export class PhonemeListVowelBlendsComponent implements OnInit, OnDestroy {
    instruction: HTMLAudioElement;

    constructor(private transferService:TransferLetterService, private router: Router, private location: Location) {

    }

    goBack() {
        this.location.back();
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

    phonemes: { [key: number]: string } =
        {
            1: 'ai',
            2: 'au',
            3: 'aw',
            4: 'ay',
            5: 'ea',
            6: 'ew',
            7: 'ie',
            8: 'ie',
            9: 'oa',
            10: 'oi',
            11: 'oo',
            12: 'oo',
            13: 'ou',
            14: 'ow',
            15: 'ow',
            16: 'oy'
        };

    sortNull() {

    }

    showPhonemeLearn(phoneme) {
        this.transferService.setData(phoneme);
        this.router.navigateByUrl('/phoneme-learn');
    }
}
