import {Component, OnDestroy, OnInit} from '@angular/core';
import {delay} from 'q';
import * as data from '../../../assets/json/phoneme-examples.json';

@Component({
    templateUrl: 'phoneme-learn.component.html',
    styleUrls: ['phoneme-learn.component.css',
                '../../main.css']
})

export class PhonemeLearnComponent implements OnInit, OnDestroy {

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

    //temp until issue 26 is completed
    name: string = "a";
    
    img1: string = '../../assets/img/words/' + data.default.a.eximg[0];
    img2: string = '../../assets/img/words/' + data.default.a.eximg[1];
    img3: string = '../../assets/img/words/' + data.default.a.eximg[2];

    constructor() {
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;
    }

    goBack(){
        history.back();
    }
    
    ngOnInit() {
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = '/assets/audio/' + data.default.a.nameaudio[0];
        this.phonemeAudio.load(); 

        this.ex1Audio = new Audio();
        this.ex1Audio.src = '/assets/audio/' + data.default.a.exaudio[0];
        this.ex1Audio.load();

        this.ex2Audio = new Audio();
        this.ex2Audio.src = '/assets/audio/' + data.default.a.exaudio[1];
        this.ex2Audio.load();

        this.ex3Audio = new Audio();
        this.ex3Audio.src = '/assets/audio/' + data.default.a.exaudio[2];
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
        this.phonemeAudio.pause();
        this.ex1Audio.pause();
        this.ex2Audio.pause();
        this.ex3Audio.pause();
    }

    playAudio() {
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

        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }

    playAudioA() {
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

    playex3Audio() {
        this.ex3Animate = true;
        this.ex3Audio.onended = () => {
            this.ex3Animate = false;
        };

        this.ex3Audio.play();
    }
}