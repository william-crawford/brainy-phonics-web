import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {UserDataService} from '../../services/user-data.service';
import * as data from '../../../assets/json/quiz-examples.json';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';


@Component({
    templateUrl: 'phoneme-quiz.component.html',
    styleUrls: ['phoneme-quiz.component.css']
})

export class PhonemeQuizComponent implements OnInit, OnDestroy {

    phonemeAnimate: boolean;
    phonemePlayAudio: boolean;
    phonemeAudio: HTMLAudioElement;

    ex1Animate: boolean;
    ex1PlayAudio: boolean;
    ex1Audio: HTMLAudioElement;

    ex2Animate: boolean;
    ex2PlayAudio: boolean;
    ex2Audio: HTMLAudioElement;

    ex3Animate: boolean;
    ex3PlayAudio: boolean;
    ex3Audio: HTMLAudioElement;

    correctAnswer: number;

    phoneme = this.transferService.getData() as Phoneme;


    // img1: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[0];
    img1: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a").eximg[0];
    // img2: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[1];
    img2: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a").eximg[1];
    // img3: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[2];
    img3: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a").eximg[2];

    puzzlePieceImages: string[] = [];
    puzzleDirectory: string = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;
    puzzleAnimate: boolean = false;

    // word1: string = data.default.find(o => o.phoneme == this.phoneme.value).exword[0];
    word1: string = data.default.find(o => o.phoneme == "a").exword[0];
    // word2: string = data.default.find(o => o.phoneme == this.phoneme.value).exword[1];
    word2: string = data.default.find(o => o.phoneme == "a").exword[1];
    // word3: string = data.default.find(o => o.phoneme == this.phoneme.value).exword[2];
    word3: string = data.default.find(o => o.phoneme == "a").exword[2];

	constructor(private transferService:TransferLetterService, private userDataService:UserDataService, private elem:ElementRef, private router: Router, private location: Location) {
        this.phoneme = this.transferService.getData() as Phoneme;
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;


        //temp
        this.phoneme.id = 'A-long'
        this.puzzleDirectory = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;


        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 2; j++) {
                this.puzzlePieceImages.push(
                    this.puzzleDirectory + '/puzzle-' + this.phoneme.id + '-row' + i + '-col' + j + '.png'
                );
            }
        }
    }

    goBack(){
        this.transferService.setData(this.phoneme);
        this.location.back();
    }

    ngOnInit() {

        this.correctAnswer = 1  // Temoprary


        this.phonemeAudio = new Audio();
        // this.phonemeAudio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).nameaudio[0];
        this.phonemeAudio.src = '/assets/audio/phonemes/' + data.default.find(o => o.phoneme == "a").nameaudio[0];
        this.phonemeAudio.load();

        this.ex1Audio = new Audio();
        // this.ex1Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[0];
        this.ex1Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a").exaudio[0];
        this.ex1Audio.load();

        this.ex2Audio = new Audio();
        // this.ex2Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[1];
        this.ex2Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a").exaudio[1];

        this.ex2Audio.load();

        this.ex3Audio = new Audio();
        // this.ex3Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[2];
        this.ex3Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a").exaudio[2];

        this.ex3Audio.load();

        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.ex1Animate = true;
            delay(250).then(() => {
                this.ex1Audio.play();
            });
        };
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex2Animate = true;
            delay(250).then(() => {
                this.ex2Audio.play();
            });
        };
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex3Animate = true;
            delay(250).then(() => {
                this.ex3Audio.play();
            });
        };
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };

        this.playAudio();
    }

    ngOnDestroy() {
        this.stopAudioAndAnimation()
    }

    stopAudioAndAnimation() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        this.phonemeAnimate = false;

        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;

        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;

        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;
    }

    playAudio() {
        this.stopAudioAndAnimation()

        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }

    playPhonemeAudio() {
        this.phonemeAnimate = true;
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.phonemeAudio.onended = () => {
                this.phonemeAnimate = false;
                this.ex1Animate = true;
                delay(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }

    onCorrect() {

        this.userDataService.addCoins(1);
        if (this.phoneme.puzzlePiecesEarned < 12) {
            this.phoneme.puzzlePiecesEarned += 1;
            if (this.phoneme.puzzlePiecesEarned == 12) {
                this.userDataService.savePuzzle(this.phoneme.id);
            }
        }
        this.puzzleAnimate = true;
        delay(500).then(() => {
            this.puzzleAnimate = false;
        });

        this.loadNew();
        this.playAudio();
    }

    //temporary implementation
    loadNew() {
        this.correctAnswer = 2;

        // img1: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[0];
        this.img1 = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a-1").eximg[0];
        // img2: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[1];
        this.img2 = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a-1").eximg[1];
        // img3: string = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == this.phoneme.value).eximg[2];
        this.img3 = '../../assets/img/sight-words/' + data.default.find(o => o.phoneme == "a-1").eximg[2];

        // this.ex1Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[0];
        this.ex1Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a-1").exaudio[0];
        this.ex1Audio.load();

        // this.ex2Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[1];
        this.ex2Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a-1").exaudio[1];

        this.ex2Audio.load();

        // this.ex3Audio.src = '/assets/audio/' + data.default.find(o => o.phoneme == this.phoneme.value).exaudio[2];
        this.ex3Audio.src = '/assets/audio/sight-words/' + data.default.find(o => o.phoneme == "a-1").exaudio[2];

        this.ex3Audio.load();

    }

    onClick1() {
        if (this.correctAnswer == 1) {
            this.onCorrect();
        } else {
            this.playAudio();
        }
    }

    onClick2() {
        if (this.correctAnswer == 2) {
            this.onCorrect();
        } else {
            this.playAudio();
        }
    }

    onClick3() {
        if (this.correctAnswer == 3) {
            this.onCorrect();
        } else {
            this.playAudio();
        }
    }

    playEx1Audio() {
        this.ex1Animate = true;
        this.ex1Audio.onended = () => {
            this.ex1Animate = false;
            this.ex1Audio.onended = () => {
                this.ex1Animate = false;
                this.ex2Animate = true;
                delay(250).then(() => {
                    this.ex2Audio.play();
                });
            };
        };
        this.ex1Audio.play();
    }

    playEx2Audio() {
        this.ex2Animate = true;
        this.ex2Audio.onended = () => {
            this.ex2Animate = false;
            this.ex2Audio.onended = () => {
                this.ex2Animate = false;
                this.ex3Animate = true;
                delay(250).then(() => {
                    this.ex3Audio.play();
                });
            };
        };
        this.ex2Audio.play();
    }

    playEx3Audio() {
        this.ex3Animate = true;
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };

        this.ex3Audio.play();
    }
}
