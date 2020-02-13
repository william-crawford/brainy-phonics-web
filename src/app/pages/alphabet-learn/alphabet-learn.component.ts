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
export class AlphabetLearnComponent implements OnInit{
    letterAnimate: boolean;

	letter = this.transferService.getData();      
	
	constructor(private transferService:TransferLetterService,
				private router: Router) {
		if(!this.letter) {
			this.router.navigateByUrl('/alphabet-list-all');
		}

		//audio
        this.letterAnimate = false;
	}

	ngOnInit() {
		console.log("init", this.letterAnimate);
		this.letterAnimate = false;
		delay(1000);
		this.letterAnimate = true;
		delay(1000);
		this.letterAnimate = false;
	}

	playAudio() {
		console.log("clicked", this.letterAnimate);
		this.letterAnimate = false;
		delay(1000);
		this.letterAnimate = true;
		delay(1000);
		this.letterAnimate = false;
	}

}
