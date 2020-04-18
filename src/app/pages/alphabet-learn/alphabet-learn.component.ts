import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Router} from '@angular/router';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';

@Component({
    selector: 'app-alphabet-learn',
    templateUrl: './alphabet-learn.component.html',
    styleUrls: ['./alphabet-learn.component.css']
})

export class AlphabetLearnComponent implements OnInit, OnDestroy {
    letterAnimate: boolean;
    letterPlayAudio: boolean;
    letterAudio: HTMLAudioElement;

    letter: AlphabetLetter;

    constructor(private transferService: TransferLetterService, private router: Router, private location: Location) {
        this.letter = this.transferService.getData() as AlphabetLetter;
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }

        //audio
        this.letterAnimate = false;
        this.letterPlayAudio = true;
    }

    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = `/assets/audio/letters/${this.letter.audio}`;
        this.letterAudio.load();

        this.letterAudio.onended = () => {
            this.letterAnimate = false;
        };

        this.playAudio();
    }

    ngOnDestroy() {
        this.letterAudio.pause();
    }

    playAudio() {
        this.letterAnimate = true;
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
            this.letterAudio.onended = () => {
                this.letterAnimate = false;
            };
        };
        this.letterAudio.play();
    }

    goBack() {
        this.location.back();
    }

    prev(event: MouseEvent) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value: Phoneme | AlphabetLetter) => {
            return (value as AlphabetLetter).letter === this.letter.letter;
        });
        if (currentIndex === 0) {
            return;
        }

        this.letter = this.transferService.getList()[currentIndex - 1] as AlphabetLetter;
        this.letterAnimate = false;
        this.letterPlayAudio = true;

        this.ngOnInit();
    }

    next(event: MouseEvent) {
        event.stopPropagation();
        const currentIndex = this.transferService.getList().findIndex((value: Phoneme | AlphabetLetter) => {
            return (value as AlphabetLetter).letter === this.letter.letter;
        });
        if (currentIndex === this.transferService.getList().length - 1) {
            return;
        }

        this.letter = this.transferService.getList()[currentIndex + 1] as AlphabetLetter;
        this.letterAnimate = false;
        this.letterPlayAudio = true;

        this.ngOnInit();
    }
}
