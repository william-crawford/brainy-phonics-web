import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Phoneme} from '../../types/phoneme';
import {Vowels} from '../../types/vowels';
import {ConsonantBlends} from '../../types/consonantBlends';
import {Consonants} from '../../types/consonants';
import {VowelConsonantBlends} from '../../types/vowelConsonantBlends';
import {VowelPairs} from '../../types/vowelPairs';
import {Kindergarten} from '../../types/kindergarten';
import {SightWord} from '../../types/sight-word';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {AlphabetLettersService} from '../../services/alphabet-letters.service';
import {ProgressService} from '../../services/progress.service';
import {PhonemesService} from '../../services/phonemes.service';
import {VowelsService} from '../../services/vowels.service';
import {ConsonantBlendsService} from '../../services/consonantBlends.service';
import {ConsonantsService} from '../../services/consonants.service';
import {VowelConsonantBlendsService} from '../../services/vowelConsonantBlends.service';
import {VowelPairsService} from '../../services/vowelPairs.service';
import {KindergartenService} from '../../services/kindergarten.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-list-select',
    templateUrl: './list-select.component.html',
    styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit, OnDestroy, AfterViewInit {

    instruction: HTMLAudioElement;
    list: string;
    // filled with test data to be overridden later
    data: AlphabetLetter[] | Phoneme[] | Vowels[] | ConsonantBlends[] | Consonants[] | VowelConsonantBlends[] | VowelPairs[] | Kindergarten[];
    dataProgress: any[];
    cardItemCount: number;

    constructor(
        private transferLetterService: TransferLetterService,
        private alphabetLettersService: AlphabetLettersService,
        private progressService: ProgressService,
        private phonemesService: PhonemesService,
        private vowelsService: VowelsService,
        private consonantBlendsService: ConsonantBlendsService,
        private consonantsService: ConsonantsService,
        private vowelConsonantBlendsService: VowelConsonantBlendsService,
        private vowelPairsService: VowelPairsService,
        private kindergartenService: KindergartenService,

        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        this.list = list;
        if (!list || list === '') {
            this.router.navigate(['']);
        } else if (list === 'phoneme') {
            this.data = this.phonemesService.dataLoad();
        } else if (list === 'alphabet') {
            this.data = this.alphabetLettersService.dataImport();
        } else if (list === 'vowels') {
            this.data = this.vowelsService.dataLoad();
        } else if (list === 'consonantBlends') {
            this.data = this.consonantBlendsService.dataLoad();
        } else if (list === 'consonants') {
            this.data = this.consonantsService.dataLoad();
        } else if (list === 'vowelConsonants') {
            this.data = this.vowelConsonantBlendsService.dataLoad();
        } else if (list === 'vowelPairs') {
            this.data = this.vowelPairsService.dataLoad();
        } else if (list === 'kindergarten') {
            this.data = this.kindergartenService.dataLoad();
        }

        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
        this.dataProgress = [];
        this.cardItemCount = 0;
    }

    ngOnInit() {
        if (this.activatedRoute.snapshot.queryParamMap.get('list') == 'alphabet') {
            document.getElementById('puzzle').classList.add('hide');
            for (var i = 0; i < Object.keys(document.getElementsByClassName('bottom')).length - 1; i++) {
                document.getElementsByClassName('bottom')[i].classList.add('alphabet-list-bottom');
            }
        }
    }

    ngAfterViewInit() {
        if (this.list === 'alphabet') {
            for (var i = 0; i < document.getElementsByClassName('app-card').length; i++) {
                var temp = <HTMLElement> document.getElementsByClassName('app-card')[i];
                temp.style.marginLeft = '7vh';
            }
        } else {
            if (this.list === 'phoneme' || this.list === 'vowelConsonants') {
                var igh = <HTMLElement> document.getElementById('I-IGH').firstChild.lastChild;
                igh.style.transform = 'translate(25vh, -20vh)';
            } 
            if (this.list === 'phoneme' || this.list === 'vowelPairs') {
                var aw = <HTMLElement> document.getElementById('A-AW').firstChild.lastChild;
                aw.style.transform = 'translate(24vh, -20vh)';
            } 
            if (this.list === 'vowels') {
                document.getElementById('Y-i').style.color = 'black';
                document.getElementById('Y-e').style.color = '#73EC12';
            }
        }
    }

    ngOnDestroy() {
        this.instruction.pause();
    }

    getDisplay(item): string {
        var icon = document.getElementById('puzzle');
        if (item != null) {
            this.showProgress(item)
            if (this.list === 'alphabet') {
                return item.letter;
            } else {
                return item.display;
            }
        }
    }

    showProgress(item): void{
        let numStars;
        let elem = document.getElementsByClassName("cardListItem")[this.cardItemCount];
        let queryStatement;

        if (item != null) {
            if (!this.dataProgress.includes(item)) {
                this.cardItemCount++;
                if (this.list === 'alphabet') {
                    queryStatement = "letter" + item.letter;
                    numStars = this.progressService.getStarsFromKey(queryStatement);
                } else {
                    queryStatement = "phoneme" + item.id;
                    numStars = this.progressService.getStarsFromKey(queryStatement);
                }
                if (numStars > 0) {
                    this.dataProgress.push(item);
                }

                if (this.progressService.getActiveStatus(queryStatement) == 1) {
                    for (let i = 0; i < numStars; i++) {
                        let img = document.createElement('img');
                        img.setAttribute("src", '/assets/img/progress/Gold-Star-Blank.png')
                        img.setAttribute("width", "50px")
                        img.setAttribute("height", "50px")
                        img.style.marginBottom = "30px";
                        elem.appendChild(img);
                    }
                } else {
                    // return silver star
                    for (let i = 0; i < numStars; i++) {
                        let img = document.createElement('img');
                        img.setAttribute("src", '/assets/img/progress/Silver-Star-Blank.png')
                        img.setAttribute("width", "50px")
                        img.setAttribute("height", "50px")
                        img.style.marginBottom = "30px";
                        elem.appendChild(img);
                    }
                }

                // show checkmark: if letters (5 stars have been earned), if phonemes (puzzle has been finished)
                if (this.progressService.getCheckMark(queryStatement)) {
                    let img = document.createElement('img');
                    img.setAttribute("src", '/assets/img/progress/check_mark.jpg')
                    img.setAttribute("width", "50px")
                    img.setAttribute("height", "50px")
                    img.style.marginBottom = "30px";
                    elem.appendChild(img);
                }
            }

        }
    }

    select(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            this.router.navigate(['alphabet-learn']);
        } else {
            this.router.navigate(['phoneme-learn']);
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

    setClass(item) {
        return item.color;
    }

    setID(item) {
        return item.id;
    }

    getImage(item) {
        if (this.list === 'alphabet') {
            return;
        } else {
            return '../../assets/img/sight-words/' + item.word1.word + '.png'; 
        }
    }
}