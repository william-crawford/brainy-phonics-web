import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import * as data from '../../../assets/json/phoneme-examples.json';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';
import {SightWord} from '../../types/sight-word';
import {AlphabetLetter} from '../../types/alphabet-letter';

@Component({
    templateUrl: 'phoneme-learn.component.html',
    styleUrls: ['phoneme-learn.component.css']
})

export class PhonemeLearnComponent implements OnInit, OnDestroy {

    oneAnimate: boolean;
    twoAnimate: boolean;
    threeAnimate: boolean;
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

    phoneme: Phoneme;

    img1: string;
    img2: string;
    img3: string;

    word1: string;
    word2: string;
    word3: string;

    constructor(
        private transferService: TransferLetterService,
        private elem: ElementRef,
        private router: Router,
        private location: Location
    ) {
        this.phoneme = this.transferService.getData() as Phoneme;
        console.log(this.phoneme.quizWords);
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
    }

    goBack() {
        this.location.back();
    }

    showQuiz() {
        this.router.navigateByUrl('/phoneme-quiz');
    }

    ngOnInit() {
        let phonemeList = this.elem.nativeElement.querySelector('.letter').classList;
        if (this.phoneme.display.length == 1) {
            phonemeList.add('one');
        } else if (this.phoneme.display.length == 2) {
            phonemeList.add('two');
        } else if (this.phoneme.display.length == 3) {
            phonemeList.add('three');
        }

        this.phonemeAudio = new Audio();
        // this.phonemeAudio.src = this.phoneme.audio;
        //this.phonemeAudio.src = `/assets/audio/phonemes/${this.phoneme.audio}`;
        this.phonemeAudio.src = '/assets/audio/phonemes/sound-A-ah.mp3';
        this.phonemeAudio.load();

        console.log(this.phoneme.audio);
        this.ex1Audio = new Audio();
        this.ex1Audio.src = this.phoneme.word1.audio;
        this.ex1Audio.load();

        this.ex2Audio = new Audio();
        this.ex2Audio.src = this.phoneme.word2.audio;
        this.ex2Audio.load();

        this.ex3Audio = new Audio();
        this.ex3Audio.src = this.phoneme.word3.audio;
        this.ex3Audio.load();

        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            } else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            } else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
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
        this.phonemeAudio.pause();
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
    }

    playAudio() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;

        if (this.phoneme.display.length == 1) {
            this.oneAnimate = false;
        } else if (this.phoneme.display.length == 2) {
            this.twoAnimate = false;
        } else if (this.phoneme.display.length == 3) {
            this.threeAnimate = false;
        }

        this.ex1Audio.pause();
        this.ex1Audio.currentTime = 0;
        this.ex1Animate = false;

        this.ex2Audio.pause();
        this.ex2Audio.currentTime = 0;
        this.ex2Animate = false;

        this.ex3Audio.pause();
        this.ex3Audio.currentTime = 0;
        this.ex3Animate = false;

        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        } else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        } else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.play();
    }

    playAudioA() {
        if (this.phoneme.display.length == 1) {
            this.oneAnimate = true;
        } else if (this.phoneme.display.length == 2) {
            this.twoAnimate = true;
        } else if (this.phoneme.display.length == 3) {
            this.threeAnimate = true;
        }
        this.phonemeAudio.onended = () => {
            if (this.phoneme.display.length == 1) {
                this.oneAnimate = false;
            } else if (this.phoneme.display.length == 2) {
                this.twoAnimate = false;
            } else if (this.phoneme.display.length == 3) {
                this.threeAnimate = false;
            }
            this.phonemeAudio.onended = () => {
                if (this.phoneme.display.length == 1) {
                    this.oneAnimate = false;
                } else if (this.phoneme.display.length == 2) {
                    this.twoAnimate = false;
                } else if (this.phoneme.display.length == 3) {
                    this.threeAnimate = false;
                }
                this.ex1Animate = true;
                delay(250).then(() => {
                    this.ex1Audio.play();
                });
            };
        };
        this.phonemeAudio.play();
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

    prev(event: MouseEvent) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value: Phoneme | AlphabetLetter) => {
            return (value as Phoneme).id === this.phoneme.id;
        });
        if (currentIndex === 0) {
            return;
        }

        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;

        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();

        this.phoneme = this.transferService.getList()[currentIndex - 1] as Phoneme;
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }

    next(event: MouseEvent) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value: Phoneme | AlphabetLetter) => {
            return (value as Phoneme).id === this.phoneme.id;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }

        this.ex1Audio.onended = null;
        this.ex2Audio.onended = null;
        this.ex3Audio.onended = null;

        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();

        this.phoneme = this.transferService.getList()[currentIndex + 1] as Phoneme;
        this.img1 = this.phoneme.word1.image;
        this.img2 = this.phoneme.word2.image;
        this.img3 = this.phoneme.word3.image;
        this.word1 = this.phoneme.word1.display;
        this.word2 = this.phoneme.word2.display;
        this.word3 = this.phoneme.word3.display;
        this.phonemePlayAudio = true;
        this.oneAnimate = false;
        this.twoAnimate = false;
        this.threeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
        this.ngOnInit();
    }
}
