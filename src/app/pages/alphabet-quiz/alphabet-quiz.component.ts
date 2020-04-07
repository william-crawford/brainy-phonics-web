import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {ElementRef} from '@angular/core';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {ProgressService} from '../../services/progress.service';
import * as data from '../../../assets/json/quiz-examples.json';
import { Location } from '@angular/common';
import {AlphabetLetter} from '../../types/alphabet-letter';


@Component({
    templateUrl: 'alphabet-quiz.component.html',
    styleUrls: ['alphabet-quiz.component.css']
})

export class AlphabetQuizComponent implements OnInit, OnDestroy {
    letterAnimate: boolean;
    letterPlayAudio: boolean;
    letterAudio: HTMLAudioElement;

    letter: AlphabetLetter;
    isFirstAttempt: boolean;

    // temporary
    ex1 = new AlphabetLetter('Bb', '/assets/audio/phonemes/sound-A.mp3', 0);

    ex2 = new AlphabetLetter('Cc', '/assets/audio/phonemes/sound-A.mp3', 0);

    ex3 = new AlphabetLetter('Dd', '/assets/audio/phonemes/sound-A.mp3', 0);

    empty = new AlphabetLetter(' ', '/assets/audio/phonemes/sound-A.mp3', 0)

    constructor(private transferService: TransferLetterService, private letterProgressService: ProgressService,
        private router: Router, private location: Location) {
        this.letter = this.transferService.getData() as AlphabetLetter;
        
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }

        //audio
        this.letterAnimate = false;
        this.letterPlayAudio = true;
    };

    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = '/assets/audio/phonemes/sound-A.mp3';
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
        };

        this.playAudio();
        this.isFirstAttempt = true;
    }

    ngOnDestroy() {
        this.letterAudio.pause();
    }

    correctAnswer() {
        this.letterAnimate = true;
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
            this.letterAudio.onended = () => {
                this.letterAnimate = false;
            };
        };

        this.ex1 = this.empty;
        this.ex2 = this.empty;
        this.ex3 = this.empty;

        this.letterAudio.play();
        delay(300).then(() => {
            this.loadNew();
        });

        if(this.isFirstAttempt) {
            if(this.letterProgressService.getActiveStatus("letter" + this.letter.letter)) {
            //add stars to progress if select correct letter on first attempt and active status is true
            this.letterProgressService.saveStarsToKey("letter" + this.letter.letter, 1);
            } else {
                this.letterProgressService.setActiveStatus("letter" + this.letter.letter, true)
            }
        }
    }

    incorrectAnswer() {
        this.isFirstAttempt = false;
        this.letterProgressService.setActiveStatus("letter" + this.letter.letter, false)
    }

    loadNew() {
        // temporary
        this.ex1 = new AlphabetLetter('Ee', '/assets/audio/phonemes/sound-A.mp3', 0);
        this.ex2 = new AlphabetLetter('Ff', '/assets/audio/phonemes/sound-A.mp3', 0);
        this.ex3 = new AlphabetLetter('Gg', '/assets/audio/phonemes/sound-A.mp3', 0);

        this.playAudio();
        this.isFirstAttempt = true;
    }

    playAudio() {
        this.letterAudio.play();
    }

    goBack() {
        this.location.back();
    }
}
