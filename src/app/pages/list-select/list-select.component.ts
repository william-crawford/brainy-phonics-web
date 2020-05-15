import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {AlphabetLettersService} from '../../services/alphabet-letters.service';
import {ProgressService} from '../../services/progress.service';
import {PhonemesService} from '../../services/phonemes.service';
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
    grade: string;
    capital: string;
    // filled with test data to be overridden later
    data: AlphabetLetter[] | Phoneme[];
    dataProgress: any[];
    cardItemCount: number;

    constructor(
        private transferLetterService: TransferLetterService,
        private alphabetLettersService: AlphabetLettersService,
        private progressService: ProgressService,
        private phonemesService: PhonemesService,

        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        let list = this.activatedRoute.snapshot.queryParamMap.get('list');
        this.list = list;
        this.grade = this.activatedRoute.snapshot.queryParamMap.get('grade');
        this.capital = this.activatedRoute.snapshot.queryParamMap.get('capital');
        if (!list || list === '') {
            this.router.navigate(['']);
        } else if (list == 'alphabet') {
            if (this.activatedRoute.snapshot.queryParamMap.get('reordered')) {
                this.data = this.alphabetLettersService.dataImport(true);
            } else {
                this.data = this.alphabetLettersService.dataImport(false);
            }
        } else {
            if (this.activatedRoute.snapshot.queryParamMap.get('reordered')) {
                this.data = this.phonemesService.dataLoad(list, this.grade, true);
            } else {
                if (this.grade) {
                    this.data = this.phonemesService.dataLoad(list, this.grade, false);
                } else {
                    this.data = this.phonemesService.dataLoad(list, '', false);
                }
            }
        }
        this.transferLetterService.setList(this.data);

        this.instruction = new Audio();
        if (this.list === 'alphabet') {
            this.instruction.src = '/assets/audio/00_Button_Audio_Win_A_Green_Ball_(Alphabet_Letters).mp3';
        } else {
            this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        }
        this.instruction.load();
        
        this.dataProgress = [];
        this.cardItemCount = 0;
    }

    ngOnInit() {
        if (this.list === 'alphabet') {
            if (!this.progressService.getReceivedInstructions('hasReceivedAlphabetInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedAlphabetInstruction', true);
            }
        } else {
            if (!this.progressService.getReceivedInstructions('hasReceivedPhonemeInstruction')) {
                this.playAudio();
                this.progressService.setReceivedInstructions('hasReceivedPhonemeInstruction', true);
            }
        }


        
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
                temp.style.marginLeft = '11vh';
            }
        }
        if (this.capital) {
            for (var i = 0; i < document.getElementsByClassName('app-card').length; i++) {
                var temp = <HTMLElement> document.getElementsByClassName('app-card')[i];
                temp.style.textTransform = 'uppercase';
            }
        }
    }

    ngOnDestroy() {
        this.instruction.pause();
        this.instruction = null;
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

    showProgress(item): void {
        let numGoldStars;
        let numSilverStars;
        let elem = document.getElementsByClassName("cardListItem")[this.cardItemCount];
        let queryStatement;

        if (item != null) {
            if (!this.dataProgress.includes(item)) {
                this.cardItemCount++;
                if (this.list === 'alphabet') {
                    queryStatement = "letter" + item.letter;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                } else {
                    queryStatement= "phoneme" + item.id;
                    numGoldStars = this.progressService.getGoldStarsFromKey(queryStatement);
                    numSilverStars = this.progressService.getSilverStarsFromKey(queryStatement);
                }


                if (numGoldStars + numSilverStars > 0) {
                    this.dataProgress.push(item);
                }

                if (numGoldStars >= 5 && this.list == "alphabet") {
                    this.progressService.setCheckMark(queryStatement, true);
                }

                    for (let i = 0; i < numGoldStars; i++) {
                        let img = document.createElement('img');
                        if (this.list === 'alphabet') {
                            img.style.transform = 'translateY(-21vh)';
                        } else {
                            img.style.transform = 'translateY(-33vh)';
                        }
                        img.setAttribute("src", '/assets/img/progress/Gold-Star-Blank.png')
                        img.setAttribute("width", '25px')
                        img.setAttribute("height", '25px')
                        img.style.marginLeft = '2vh';
                        elem.appendChild(img);
                    }

                    for (let i = 0; i < numSilverStars; i++) {
                        let img = document.createElement('img');
                        if (this.list === 'alphabet') {
                            img.style.transform = 'translateY(-21vh)';
                        } else {
                            img.style.transform = 'translateY(-33vh)';
                        }
                        img.setAttribute("src", '/assets/img/progress/Silver-Star-Blank.png')
                        img.setAttribute("width", '25px')
                        img.setAttribute("height", '25px')
                        img.style.marginLeft = '2vh';
                        elem.appendChild(img);
                    }

                // show checkmark: if letters (5 stars have been earned), if phonemes (puzzle has been finished)
                if (this.progressService.getCheckMark(queryStatement)) {
                    let img = document.createElement('img');
                    if (this.list === 'alphabet') {
                        img.style.transform = 'translateY(-22vh)';
                    } else {
                        img.style.transform = 'translateY(-33vh)';
                    }
                    img.setAttribute("src", '/assets/img/progress/check_mark.png')
                    img.setAttribute("width", '46px')
                    img.setAttribute("height", '46px')
                    img.style.marginLeft = '13vh';
                    elem.appendChild(img);
                }
            }

        }
    }

    select(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            if (this.capital) {
                this.router.navigate(['alphabet-learn'], {queryParams: {capital: true}});
            } else {
                this.router.navigate(['alphabet-learn']);
            }
        } else {
            if (this.capital) {
                this.router.navigate(['phoneme-learn'], {queryParams: {capital: true}});
            } else {
                this.router.navigate(['phoneme-learn']);
            }
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
        if (this.grade != '') {
            return item.color[this.grade];
        } else {
            if (this.list === 'vowels') {
                return item.color.vowel;
            } else if (this.list === 'kindergarten') {
                return item.color.K;
            } else if (this.list !== 'alphabet') {
                return item.color.all;
            }
        }
    }

    setID(item) {
        return item.id;
    }

    getImage(item) {
        if (this.list === 'alphabet') {
            return;
        } else {
            return item.word1.image; 
        }
    }

    quiz(item) {
        this.transferLetterService.setData(item);
        if (this.list == 'alphabet') {
            if (this.capital) {
                this.router.navigate(['alphabet-quiz'], {queryParams: {quizAll: true, capital: true}});
            } else {
                this.router.navigate(['alphabet-quiz'], {queryParams: {quizAll: true}});
            }
        } else {
            if (this.capital) {
                this.router.navigate(['phoneme-quiz'], {queryParams: {list: this.list, quizAll: true, capital: true, grade: this.grade}});
            } else {
                this.router.navigate(['phoneme-quiz'], {queryParams: {list: this.list, quizAll: true, grade: this.grade}});
            }
        }
    }
}
