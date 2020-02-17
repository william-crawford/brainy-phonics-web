import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {CardComponent} from '../../components/card/card.component';
import { TransferLetterService } from '../../services/transfer-letter-service.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'phoneme-list-vowelsconsonants.component.html',
    styleUrls: ['phoneme-list-vowelsconsonants.component.css',
        '../../main.css']
})

export class PhonemeListVowelsConsonantsComponent implements OnInit, OnDestroy {
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
        1: 'an',
        2: 'ar',
        3: 'er',
        4: 'et',
        5: 'igh',
        6: 'il',
        7: 'ir',
        8: 'le',
        9: 'or',
        10: 'qu',
        11: 'ur'
    };

    sortNull() {

    }

    showPhonemeLearn(phoneme) {
        this.transferService.setData(phoneme);
        this.router.navigateByUrl('/phoneme-learn');
    }
}
