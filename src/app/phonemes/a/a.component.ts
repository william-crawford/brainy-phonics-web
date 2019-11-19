import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { delay } from 'q';

@Component({
    templateUrl: 'a.component.html',
    styleUrls: ['a.component.css',
        '../../main.css']
})

export class AComponent implements OnInit, OnDestroy {

    phonemeAnimate: boolean;
    phonemeAudio: HTMLAudioElement;

    apeAnimate: boolean;
    apeAudio: HTMLAudioElement;

    skateAnimate: boolean;
    skateAudio: HTMLAudioElement;

    craneAnimate: boolean;
    craneAudio: HTMLAudioElement;

    constructor() {
        this.phonemeAnimate = false;
        this.apeAnimate = false;
        this.skateAnimate = false;
        this.craneAnimate = false;
    }

    ngOnInit() {
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = '/assets/audio/sound-A.mp3';
        this.phonemeAudio.load();

        this.apeAudio = new Audio();
        this.apeAudio.src = '/assets/audio/ape.mp3';
        this.apeAudio.load();

        this.craneAudio = new Audio();
        this.craneAudio.src = '/assets/audio/crane.mp3';
        this.craneAudio.load();

        this.skateAudio = new Audio();
        this.skateAudio.src = '/assets/audio/skate.mp3';
        this.skateAudio.load();

        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.apeAnimate = true;
            delay(250).then(() => {
                this.apeAudio.play();
            });
        };
        this.apeAudio.onended = () => {
            this.apeAnimate = false;
            this.skateAnimate = true;
            delay(250).then(() => {
                this.skateAudio.play();
            });
        };
        this.skateAudio.onended = () => {
            this.skateAnimate = false;
            this.craneAnimate = true;
            delay(250).then(() => {
                this.craneAudio.play();
            });
        };
        this.craneAudio.onended = () => {
            this.craneAnimate = false;
        };

        this.playAudio();
    }

    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.apeAudio.pause();
        this.skateAudio.pause();
        this.craneAudio.pause();
    }

    playAudio() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        this.phonemeAnimate = false;

        this.apeAudio.pause();
        this.apeAudio.currentTime = 0;
        this.apeAnimate = false;

        this.skateAudio.pause();
        this.skateAudio.currentTime = 0;
        this.skateAnimate = false;

        this.craneAudio.pause();
        this.craneAudio.currentTime = 0;
        this.craneAnimate = false;

        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }
}