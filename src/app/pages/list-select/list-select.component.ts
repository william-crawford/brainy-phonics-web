import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Phoneme} from '../../types/phoneme';
import {SightWord} from '../../types/sight-word';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {AlphabetLettersService} from '../../services/alphabet-letters.service';
import {PhonemesService} from '../../services/phonemes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-list-select',
    templateUrl: './list-select.component.html',
    styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit, OnDestroy {

    instruction: HTMLAudioElement;
    list: string
    // filled with test data to be overridden later
    data: AlphabetLetter[] | Phoneme[];

    constructor(
        private transferLetterService: TransferLetterService,
        private alphabetLettersService: AlphabetLettersService,
        private phonemesService: PhonemesService,

        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        this.list = list
        if (!list || list === '') {
            this.router.navigate(['']);
        }
        if (list === 'phoneme') {
            this.data = this.phonemesService.dataLoad();
            // this.data = [this.transferLetterService.getData() as Phoneme];
        }
        if (list === 'alphabet') {
            // this.data = [
            //     new AlphabetLetter('Aa', '/assets/audio/phonemes/sound-A.mp3', 0)
            // ];
            this.data = this.alphabetLettersService.dataImport();
            // this.letterProgress = this.letterProgressService.getStarsFromLetter("letter" + this.letter.letter);
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

    getDisplay(item): string {
        var icon = document.getElementById('puzzle');
        if (this.list === 'phoneme') {
            return item.display;
        } else if (this.list === 'alphabet') {
            return item.letter;
        }
    }

    select(item: Phoneme | AlphabetLetter) {
        this.transferLetterService.setData(item);
        if (this.list == 'phoneme') {
            this.router.navigate(['phoneme-learn']);
        } else if (this.list === 'alphabet') {
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
