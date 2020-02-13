import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlphabetLetter } from '../../types/alphabet-letter';
import { delay } from 'q';
import { Router } from '@angular/router';
import { TransferLetterService } from '../../services/transfer-letter-service.service';

@Component({
  selector: 'app-alphabet-learn',
  templateUrl: './alphabet-learn.component.html',
  styleUrls: ['./alphabet-learn.component.css', '../../main.css']
})
export class AlphabetLearnComponent implements OnInit, OnDestroy {
	letterAnimate: boolean;
	letterPlayAudio: boolean;
	letterAudio: HTMLAudioElement;

	letter = this.transferService.getData();      
	
	constructor(private transferService:TransferLetterService, private router: Router) {
		if(!this.letter) {
			this.router.navigateByUrl('/alphabet-list-all');
		}

		//audio
		this.letterAnimate = false;
		this.letterPlayAudio = true;
	}

	ngOnInit() {
		this.letterAudio = new Audio();
		this.letterAudio.src = '/assets/audio/sound-A.mp3';
		this.letterAudio.load();
		
		this.letterAudio.onended = () => {
			this.letterAnimate = false;
		}

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

}
