import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';
import { TransferLetterService } from '../../services/transfer-letter-service.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'phoneme-list-consonants.component.html',
    styleUrls: ['phoneme-list-consonants.component.css',
        '../../main.css']
})

export class PhonemeListConsonantsComponent implements OnInit, OnDestroy {
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
            1: 'b',
            2: 'c',
            3: 'c',
            4: 'd',
            5: 'f',
            6: 'g',
            7: 'g',
            8: 'h',
            9: 'j',
            10: 'k',
            11: 'l',
            12: 'm',
            13: 'n',
            14: 'p',
            15: 'r',
            16: 's',
            17: 's',
            18: 't',
            19: 'v',
            20: 'w',
            21: 'x',
            22: 'y',
            23: 'z'
        };

    sortNull() {

    }

    showPhonemeLearn(phoneme) {
        this.transferService.setData(phoneme);
        this.router.navigateByUrl('/phoneme-learn');
    }
}
