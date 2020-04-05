import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Phoneme} from '../../types/phoneme';
import {SightWord} from '../../types/sight-word';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-list-select',
    templateUrl: './list-select.component.html',
    styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit, OnDestroy {

    instruction: HTMLAudioElement;

    // filled with test data to be overridden later
    data: AlphabetLetter[] | Phoneme[];

    constructor(
        private transferLetterService: TransferLetterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        if (!list || list === '') {
            this.router.navigate(['']);
        }
        if (list === 'phoneme') {
            this.data = [
                new Phoneme(
                    'a1',
                    'a',
                    '/assets/audio/phonemes/sound-A.mp3',
                    new SightWord('crane', '/assets/sight-words/audio/crane.mp3', ''),
                    new SightWord('skate', '/assets/sight-words/audio/skate.mp3', ''),
                    new SightWord('ape', '/assets/audio/sight-words/ape.mp3', ''),
                    0,
                    "test"
                )
            ];
        }
        if (list === 'alphabet') {
            this.data = [
                new AlphabetLetter('Aa', '/assets/audio/phonemes/sound-A.mp3', 0)
            ];
        }
        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
    }

    ngOnInit() {
        if (this.activatedRoute.snapshot.queryParamMap.get('list') == 'alphabet') {
            document.getElementById('puzzle').classList.add('hide');
            for (var i = 0; i < Object.keys(document.getElementsByClassName('bottom')).length - 1; i++) {
                document.getElementsByClassName('bottom')[i].classList.add('alphabet-list-bottom');
            }
        }
    }

    ngOnDestroy() {
        this.instruction.pause();
    }

    getDisplay(item: Phoneme | AlphabetLetter): string {
        var icon = document.getElementById('puzzle');
        if (item instanceof Phoneme) {
            return item.display;
        } else {
            return item.letter;
        }
    }

    select(item: Phoneme | AlphabetLetter) {
        this.transferLetterService.setData(item);
        console.log(item);
        if (item instanceof Phoneme) {
            this.router.navigate(['phoneme-learn']);
        } else {
            this.router.navigate(['alphabet-learn']);
        }
    }

    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }

    goBack() {
        this.location.back();
    }
}
