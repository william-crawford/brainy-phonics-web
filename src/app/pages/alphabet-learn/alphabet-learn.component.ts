import { Component, OnInit } from '@angular/core';
import { AlphabetLetter } from '../../types/alphabet-letter';
import { TransferLetterService } from '../../services/transfer-letter-service.service';

@Component({
  selector: 'app-alphabet-learn',
  templateUrl: './alphabet-learn.component.html',
  styleUrls: ['./alphabet-learn.component.css', '../../main.css']
})
export class AlphabetLearnComponent {
	letter= this.transferService.getData();      
	
	constructor(private transferService:TransferLetterService) {
		if(this.letter) {
			console.log("got letter from transfer service! it's ", this.letter.value);
  		}
	}

}
