import { Component, OnInit } from '@angular/core';
import { AlphabetLetter } from '../../types/alphabet-letter';
import { TransferLetterService } from '../../services/transfer-letter-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alphabet-learn',
  templateUrl: './alphabet-learn.component.html',
  styleUrls: ['./alphabet-learn.component.css', '../../main.css']
})
export class AlphabetLearnComponent {
	letter= this.transferService.getData();

	constructor(private transferService:TransferLetterService, private location: Location) {
		if(this.letter) {
			console.log("got letter from transfer service! it's ", this.letter.value);
  		}
	}

    goBack() {
        this.location.back();
    }
}
