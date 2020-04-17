import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {delay} from 'q';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {UserDataService} from '../../services/user-data.service';
import data from '../../../assets/json/phonemes.json';
import {ProgressService} from '../../services/progress.service';
import {Location} from '@angular/common';
import {Phoneme} from '../../types/phoneme';

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

    correctAnswer: number;

    phoneme = this.transferService.getData() as Phoneme;

    img1: string;
    img2: string;
    img3: string;

    puzzlePieceImages: string[] = [];
    puzzleDirectory: string = '../../assets/img/puzzle-pieces/puzzle-' + this.phoneme.id;
    puzzleAnimate: boolean = false;
    puzzleComplete: boolean = false;
    isFirstAttempt: boolean;

	constructor(
        private transferService:TransferLetterService,
        private userDataService:UserDataService,
        private phonemeProgressService: ProgressService,
        private elem:ElementRef,
        private router: Router,
        private location: Location
    ) {
        this.phoneme = this.transferService.getData() as Phoneme;
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
        this.phoneme.puzzlePiecesEarned = userDataService.getPuzzlePieces(this.phoneme.id)

    }

    goBack(){
        this.transferService.setData(this.phoneme);
        this.location.back();
    }

    ngOnInit() {

        this.phonemeAudio = new Audio();
        // this.phonemeAudio.src = '/assets/audio/phonemes/' + data.default.find(o => o.phoneme == this.phoneme.id).audio;
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

        this.isFirstAttempt = true;
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
        this.userDataService.addCoins(1);
        this.userDataService.addPuzzlePieces(this.phoneme.id, 2);
        this.phoneme.puzzlePiecesEarned = this.userDataService.getPuzzlePieces(this.phoneme.id);

        this.puzzleAnimate = true;
        delay(500).then(() => {
            this.puzzleAnimate = false;
        });

        this.loadNew();

        if (this.phoneme.puzzlePiecesEarned == 12) {
            this.phonemeProgressService.setCheckMark("phoneme" + this.phoneme.id, true);
        }

        if(this.isFirstAttempt) {
            if(this.phonemeProgressService.getActiveStatus("phoneme" + this.phoneme.id)) {
            //add stars to progress if select correct phoneme on first attempt and active status is true
            this.phonemeProgressService.saveStarsToKey("phoneme" + this.phoneme.id, 1);
            } else {
                this.phonemeProgressService.setActiveStatus("phoneme" + this.phoneme.id, true)
            }
        }
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

        this.playAudio();

    }

    generateExamples() {
        var positiveExamples = data.find(o => o.id == this.phoneme.id)["quiz-words"];

        var positiveExample = positiveExamples[Math.floor(Math.random() * positiveExamples.length)];
        return [
            positiveExample,
            this.generateNegativeExample(positiveExamples),
            this.generateNegativeExample(positiveExamples)
        ];
    }

    generateNegativeExample(positiveExamples) {
        var example;
        do {
            example = this.randomQuizWord();
        }
        while (positiveExamples.includes(example));
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
        this.isFirstAttempt = false;
        this.phonemeProgressService.setActiveStatus("phoneme" + this.phoneme.id, false)
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
