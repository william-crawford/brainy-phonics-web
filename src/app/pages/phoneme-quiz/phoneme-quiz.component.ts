import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {UserDataService} from '../../services/user-data.service';
import data from '../../../assets/json/phonemes.json';
import badExamples from '../../../assets/json/bad-assets.json';
import {ProgressService} from '../../services/progress.service';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';
import {Vowels} from '../../types/vowels';
import {ConsonantBlends} from '../../types/consonantBlends';
import {Consonants} from '../../types/consonants';
import {VowelConsonantBlends} from '../../types/vowelConsonantBlends';
import {VowelPairs} from '../../types/vowelPairs';
import {Kindergarten} from '../../types/kindergarten';
import {PhonemesService} from '../../services/phonemes.service';
import {VowelsService} from '../../services/vowels.service';
import {ConsonantBlendsService} from '../../services/consonantBlends.service';
import {ConsonantsService} from '../../services/consonants.service';
import {VowelConsonantBlendsService} from '../../services/vowelConsonantBlends.service';
import {VowelPairsService} from '../../services/vowelPairs.service';
import {KindergartenService} from '../../services/kindergarten.service';
import {ChangeDetectorRef} from '@angular/core';

@Component({
    templateUrl: 'phoneme-quiz.component.html',
    styleUrls: ['phoneme-quiz.component.css']
})

export class PhonemeQuizComponent implements OnInit, OnDestroy {

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

    correctAudio: HTMLAudioElement;

    data: Phoneme[] | Vowels[] | ConsonantBlends[] | Consonants[] | VowelConsonantBlends[] | VowelPairs[] | Kindergarten[];
    phoneme: Phoneme | Vowels | ConsonantBlends | Consonants | VowelConsonantBlends | VowelPairs | Kindergarten;
    quizPhoneme: Phoneme;
    list: string;
    quizAll: string;
    key: number;
    begin: boolean = false;

    correctAnswer: number;

    img1: string;
    img2: string;
    img3: string;

    puzzlePieceImages: string[] = [];
    piecesToAnimate: number = 0;
    puzzleDirectory: string;
    puzzleAnimate: boolean = false;
    puzzleComplete: boolean = false;
    isFirstAttempt: boolean;
    hasGuessed: boolean;

    constructor(
        private transferService: TransferLetterService,
        private userDataService: UserDataService,
        private phonemeProgressService: ProgressService,
        private elem: ElementRef,
        private router: Router,
        private location: Location,
        private activatedRoute: ActivatedRoute,

        private phonemesService: PhonemesService,
        private vowelsService: VowelsService,
        private consonantBlendsService: ConsonantBlendsService,
        private consonantsService: ConsonantsService,
        private vowelConsonantBlendsService: VowelConsonantBlendsService,
        private vowelPairsService: VowelPairsService,
        private kindergartenService: KindergartenService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.quizAll = this.activatedRoute.snapshot.queryParamMap.get('quizAll');
        // Sets random phoneme if selected Quiz-all function
        if (this.quizAll === 'true') {
            let list = this.activatedRoute.snapshot.queryParamMap.get('list');
            this.list = list;

            // Chooses a random phoneme that belongs in its category
            var key = 0;

            if (!list || list === '') {
                this.router.navigate(['']);
            } else if (list === 'phoneme') {
                key = Math.floor(Math.random() * 92);
                this.data = this.phonemesService.dataLoad();
            } else if (list === 'vowels') {
                key = Math.floor(Math.random() * 17);
                this.data = this.vowelsService.dataLoad();
            } else if (list === 'consonantBlends') {
                key = Math.floor(Math.random() * 15);
                this.data = this.consonantBlendsService.dataLoad();
            } else if (list === 'consonants') {
                key = Math.floor(Math.random() * 22);
                this.data = this.consonantsService.dataLoad();
            } else if (list === 'vowelConsonants') {
                key = Math.floor(Math.random() * 10);
                this.data = this.vowelConsonantBlendsService.dataLoad();
            } else if (list === 'vowelPairs') {
                key = Math.floor(Math.random() * 15);
                this.data = this.vowelPairsService.dataLoad();
            } else if (list === 'kindergarten') {
                key = Math.floor(Math.random() * 53);
                this.data = this.kindergartenService.dataLoad();
            }
            this.key = key;
            this.phoneme = this.data[key];
        } else {
            this.phoneme = this.transferService.getData() as Phoneme;
        }

        this.puzzleDirectory = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.ex1Animate = false;
        this.ex2Animate = false;
        this.ex3Animate = false;

        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 2; j++) {
                this.puzzlePieceImages.push(
                    this.puzzleDirectory + '/puzzle-' + this.phoneme.id + '-row' + i + '-col' + j + '.png'
                );
            }
        }

        // Random number generator that accepts a seed
        var LCG=s=>()=>(2**31-1&(s=Math.imul(48271,s)))/2**31;

        // Generate seed for rng based on phoneme id
        var hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
        var hash = hashCode(this.phoneme.id);
        var rng = LCG(hash);

        // Shuffle order of puzzle pieces being displayed
        this.puzzlePieceImages.sort(function() {return rng() - 0.5});
    }

    goBack(){
        this.transferService.setData(this.phoneme);
        this.location.back();
    }

    ngOnInit() {

        this.quizPhoneme = data.find(o => o.id == this.phoneme.id)
        this.phoneme.puzzlePiecesEarned = this.userDataService.getPuzzlePieces(this.phoneme.id)

        this.correctAudio = new Audio();
        this.correctAudio.src = '/assets/audio/buttons/correct.mp3';
        this.correctAudio.load()

        this.phonemeAudio = new Audio();
        // this.phonemeAudio.src = '/assets/audio/phonemes/sound-' + this.phoneme.id + '.mp3';
        // this.phonemeAudio.src = '/assets/audio/phonemes/sound-' + this.phoneme.id + '.mp3';
        this.phonemeAudio.src = '/assets/audio/phonemes/sound-A.mp3';
        this.phonemeAudio.load();

        this.ex1Audio = new Audio();
        this.ex2Audio = new Audio();
        this.ex3Audio = new Audio();

        this.loadNew();

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

        this.isFirstAttempt = true;
        this.hasGuessed = false;
    }

    ngOnDestroy() {
        this.stopAudioAndAnimation();
    }

    stopAudioAndAnimation() {
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
    }

    playAudio() {
        this.stopAudioAndAnimation()

        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }

    playPhonemeAudio() {
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

    onCorrect() {
        var initialPuzzlePieces = this.phoneme.puzzlePiecesEarned;
        if (this.isFirstAttempt) {
            this.userDataService.addPuzzlePieces(this.phoneme.id, 2);
            this.userDataService.addCoins(2);
            //add stars to progress if select correct phoneme on first attempt
            this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", 1);
            if (this.phonemeProgressService.getSilverStarsFromKey("phoneme" + this.phoneme.id) > 0) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", -1);
            }
        } else {
            this.userDataService.addPuzzlePieces(this.phoneme.id, 1);
            this.userDataService.addCoins(1);
        }

        this.phoneme.puzzlePiecesEarned = this.userDataService.getPuzzlePieces(this.phoneme.id);
        this.piecesToAnimate = this.phoneme.puzzlePiecesEarned - initialPuzzlePieces;

        if (this.phoneme.puzzlePiecesEarned == 12) {
            this.phonemeProgressService.setCheckMark("phoneme" + this.phoneme.id, true);
        }

        this.correctAudio.play();

        if (this.quizAll) {
            this.loadNewPhoneme();
        }
        this.loadNew();

        this.puzzleAnimate = true;
        delay(900).then(() => {
            this.puzzleAnimate = false;
            this.changeDetectorRef.detectChanges();
        });

        delay(1000).then(() => {
            this.playAudio();
        });

    }

    loadNew() {
        this.correctAnswer = Math.floor(Math.random() * 3);

        var examples = this.generateExamples();
        var temp = examples[this.correctAnswer];
        examples[this.correctAnswer] = examples[0];
        examples[0] = temp;

        this.img1 = '/assets/img/sight-words/' + examples[0] + '.png';
        this.img2 = '/assets/img/sight-words/' + examples[1] + '.png';
        this.img3 = '/assets/img/sight-words/' + examples[2] + '.png';

        this.ex1Audio.src = '/assets/audio/sight-words/' + examples[0] + '.mp3';
        this.ex2Audio.src = '/assets/audio/sight-words/' + examples[1] + '.mp3';
        this.ex3Audio.src = '/assets/audio/sight-words/' + examples[2] + '.mp3';

        this.ex1Audio.load();
        this.ex2Audio.load();
        this.ex3Audio.load();

    }

    // Function for Quiz-All; selects a new random phoneme to quiz on;
    loadNewPhoneme() {
        // Chooses a random phoneme that belongs in its category
        var key = 0;

        if (!this.list || this.list === '') {
            this.router.navigate(['']);
        } else if (this.list === 'phoneme') {
            key = Math.floor(Math.random() * 92);
        } else if (this.list === 'vowels') {
            key = Math.floor(Math.random() * 17);
        } else if (this.list === 'consonantBlends') {
            key = Math.floor(Math.random() * 15);
        } else if (this.list === 'consonants') {
            key = Math.floor(Math.random() * 22);
        } else if (this.list === 'vowelConsonants') {
            key = Math.floor(Math.random() * 10);
        } else if (this.list === 'vowelPairs') {
            key = Math.floor(Math.random() * 15);
        } else if (this.list === 'kindergarten') {
            key = Math.floor(Math.random() * 53);
        }
        this.key = key;
        this.phoneme = this.data[key];
        this.quizPhoneme = data.find(o => o.id == this.phoneme.id);
    }

    generateExamples() {
        var positiveExamples = this.quizPhoneme["quiz-words"];
        positiveExamples = [].concat(
            positiveExamples,
            [
                this.phoneme.word1.word,
                this.phoneme.word2.word,
                this.phoneme.word3.word
            ]
        );

        var positiveExample;
        do {
            positiveExample = positiveExamples[Math.floor(Math.random() * positiveExamples.length)];
        }
        while(badExamples.includes(positiveExample));
        // while(false);
        return [
            positiveExample,
            this.generateNegativeExample(positiveExamples),
            this.generateNegativeExample(positiveExamples)
        ];
    }

    isValidNegativeExample(example, positiveExamples) {
        return !positiveExamples.includes(example) && !example.includes(this.phoneme.display) && !badExamples.includes(example);
    }

    generateNegativeExample(positiveExamples) {
        var example;
        do {
            example = this.randomQuizWord();
        }
        while (!this.isValidNegativeExample(example, positiveExamples));
        return example;
    }

    randomQuizWord() {
        var quizWords = data[Math.floor(Math.random() * data.length)]["quiz-words"];
        return quizWords[Math.floor(Math.random() * quizWords.length)];
    }

    onClick1() {
        if (this.correctAnswer == 0) {
            this.onCorrect();
        } else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }

    onClick2() {
        if (this.correctAnswer == 1) {
            this.onCorrect();
        } else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }

    onClick3() {
        if (this.correctAnswer == 2) {
            this.onCorrect();
        } else {
            this.incorrectAnswer();
            this.playAudio();
        }
    }

    incorrectAnswer() {
        if(!this.hasGuessed) {
            this.hasGuessed = true;
            this.isFirstAttempt = false;
            const goldStarNum = this.phonemeProgressService.getGoldStarsFromKey("phoneme" + this.phoneme.id)
            if (goldStarNum > 0 && goldStarNum < 5) {
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "gold", -1);
                this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id + "silv", 1);
            }
        }
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
}
