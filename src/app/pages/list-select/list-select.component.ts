import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Phoneme} from '../../types/phoneme';
import {SightWord} from '../../types/sight-word';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-list-select',
    templateUrl: './list-select.component.html',
    styleUrls: ['./list-select.component.css', '../../main.css']
})
export class ListSelectComponent implements OnInit, OnDestroy {

    instruction: HTMLAudioElement;

    // filled with test data to be overridden later
    data: AlphabetLetter[] | Phoneme[];

    constructor(
        private transferLetterService: TransferLetterService,
        private router: Router,
        private activatedRoute: ActivatedRoute
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
                    '/assets/audio/sound-A.mp3',
                    new SightWord('crane', '/assets/audio/crane.mp3', ''),
                    new SightWord('skate', '/assets/audio/skate.mp3', ''),
                    new SightWord('ape', '/assets/audio/ape.mp3', '')
                )
            ];
        }
        if (list === 'alphabet') {
            this.data = [
                new AlphabetLetter('a', '/assets/audio/sound-A.mp3', 0)
            ];
        }
        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.instruction.pause();
    }

    getDisplay(item: Phoneme | AlphabetLetter): string {
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
}
