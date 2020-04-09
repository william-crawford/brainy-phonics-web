import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {ElementRef} from '@angular/core';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {ProgressService} from '../../services/progress.service';
import {AlphabetLettersService} from '../../services/alphabet-letters.service';
import * as example from '../../../assets/json/quiz-examples.json';
import { Location } from '@angular/common';
import {AlphabetLetter} from '../../types/alphabet-letter';


@Component({
    templateUrl: 'alphabet-quiz.component.html',
    styleUrls: ['alphabet-quiz.component.css']
})

export class AlphabetQuizComponent implements OnInit, OnDestroy {
    letterAnimate1: boolean;
    letterAnimate2: boolean;
    letterAnimate3: boolean;
    letterAnimate4: boolean;

    letterPlayAudio: boolean;
    letterAudio: HTMLAudioElement;

    letter: AlphabetLetter;
    letterList: AlphabetLetter[];
    isFirstAttempt: boolean;

    ex1: AlphabetLetter;
    ex2: AlphabetLetter;
    ex3: AlphabetLetter;
    ex4: AlphabetLetter;
    empty = new AlphabetLetter(' ', '/assets/audio/phonemes/sound-A.mp3', 0);

    constructor(
        private transferService: TransferLetterService,
        private letterProgressService: ProgressService,
        private alphabetLettersService: AlphabetLettersService,
        private router: Router,
        private location: Location
    ) {
        this.letter = this.transferService.getData() as AlphabetLetter;
        this.letterList = this.alphabetLettersService.dataImport();

        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }

        // animation
        this.letterAnimate1 = false;
        this.letterAnimate2 = false;
        this.letterAnimate3 = false;
        this.letterAnimate4 = false;

        // audio
        this.letterPlayAudio = true;
    };

    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = '/assets/audio/phonemes/sound-A.mp3';
        this.letterAudio.load();
        this.letterAudio.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
        };

        this.playAudio();
        this.isFirstAttempt = true;

        //randomized randomExamples
        this.loadNew();
    }

    ngOnDestroy() {
        this.letterAudio.pause();
    }

    check(selected : AlphabetLetter) {
        if (selected === this.letter) {
            this.correctAnswer(selected);
        } else {
            this.incorrectAnswer();
        }
    }

    correctAnswer(correct : AlphabetLetter) {
        if (correct == this.ex1) {
            this.letterAnimate1 = true;
            this.ex2 = this.empty;
            this.ex3 = this.empty;
            this.ex4 = this.empty;
        } else if (correct == this.ex2) {
            this.letterAnimate2 = true;
            this.ex1 = this.empty;
            this.ex3 = this.empty;
            this.ex4 = this.empty;
        } else if (correct == this.ex3) {
            this.letterAnimate3 = true;
            this.ex2 = this.empty;
            this.ex1 = this.empty;
            this.ex4 = this.empty;
        } else {
            this.letterAnimate4 = true;
            this.ex2 = this.empty;
            this.ex3 = this.empty;
            this.ex1 = this.empty;
        }


        this.letterAudio.onended = () => {
            this.letterAnimate1 = false;
            this.letterAnimate2 = false;
            this.letterAnimate3 = false;
            this.letterAnimate4 = false;
            this.letterAudio.onended = () => {
                this.letterAnimate1 = false;
                this.letterAnimate2 = false;
                this.letterAnimate3 = false;
                this.letterAnimate4 = false;
            };
        };

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
        var randomExamples = this.pickRandom(this.letter);
        randomExamples.push(this.letter);

        randomExamples.sort(() => Math.random() - 0.5);

        this.ex1 = randomExamples[0];
        this.ex2 = randomExamples[1];
        this.ex3 = randomExamples[2];
        this.ex4 = randomExamples[3];

        this.playAudio();
        this.isFirstAttempt = true;
    }

    pickRandom(current : AlphabetLetter) {
        var copiedList = [...this.letterList];

        // remove selected alphabet from list
        const index : number = copiedList.indexOf(current);

        if (index !== -1) {
            copiedList.splice(index, 1);
        }

        // create list of 3 unique randomized examples
        var n = 3;
        var result = new Array(n),
        len = copiedList.length,
        taken = new Array(len);

        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = copiedList[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }

        return result;
    }

    playAudio() {
        this.letterAudio.play();
    }

    goBack() {
        this.location.back();
    }
}
