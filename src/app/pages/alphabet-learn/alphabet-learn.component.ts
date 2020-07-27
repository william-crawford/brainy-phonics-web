import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {ActivatedRoute, Router} from '@angular/router';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';

@Component({
    selector: 'app-alphabet-learn',
    templateUrl: './alphabet-learn.component.html',
    styleUrls: ['./alphabet-learn.component.css']
})

export class AlphabetLearnComponent implements OnInit, OnDestroy, AfterViewInit {
    letterAnimate: boolean;
    letterPlayAudio: boolean;
    letterAudio: HTMLAudioElement;

    letter: AlphabetLetter;
    capital: string;

    constructor(
        private transferService: TransferLetterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        this.letter = this.transferService.getData() as AlphabetLetter;
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
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

    ngAfterViewInit() {
        if (this.capital) {
            var temp = <HTMLElement> document.getElementById('main-body');
            temp.style.textTransform = 'uppercase';

        }
    }
    
    ngOnDestroy() {
        if(this.letterAudio.src !== undefined){
            this.letterAudio.pause();
            this.letterAudio = null;
        }
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

    takeQuiz() {
        if (this.capital) {
            this.router.navigate(['alphabet-quiz'], {queryParams: {capital: true}});
        } else {
            this.router.navigateByUrl('/alphabet-quiz');
        }
    }
}
