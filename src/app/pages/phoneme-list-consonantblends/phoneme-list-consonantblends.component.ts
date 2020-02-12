import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';
import { TransferLetterService } from '../../services/transfer-letter-service.service';

@Component({
    templateUrl: 'phoneme-list-consonantblends.component.html',
    styleUrls: ['phoneme-list-consonantblends.component.css',
        '../../main.css']
})

export class PhonemeListConsonantBlendsComponent implements OnInit, OnDestroy {
    instruction: HTMLAudioElement;

    constructor(private transferService:TransferLetterService, private router: Router) {
    
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
            1: 'bl',
            2: 'br',
            3: 'ch',
            4: 'cl',
            5: 'cr',
            6: 'dr',
            7: 'fl',
            8: 'fr',
            9: 'gl',
            10: 'gr',
            11: 'nd',
            12: 'ng',
            13: 'nk',
            14: 'pl',
            15: 'pr',
            16: 'sh',
            17: 'sk',
            18: 'sl',
            19: 'sp',
            20: 'st',
            21: 'sw',
            22: 'th',
            23: 'th',
            24: 'tr',
            25: 'wh'
        };

        sortNull() {

        }

        showPhonemeLearn(phoneme) {
            this.transferService.setData(phoneme);
            this.router.navigateByUrl('/phoneme-learn');
        }
}
