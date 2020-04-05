import {Component, OnInit} from '@angular/core';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {PhonemesService} from '../../services/phonemes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  data: Phoneme[];

  constructor(
    private transferLetterService: TransferLetterService,
    private phonemesService: PhonemesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
) {
  this.data = this.phonemesService.dataLoad();
}

  ngOnInit() {
  }

  getDisplay(item: Phoneme) {
    return item.display;
  }

  select(item: Phoneme) {
    this.transferLetterService.setData(item);
    // if (item.stars == 5) {
    //     this.router.navigate(['phoneme-learn']);
    // } else {
        this.router.navigate(['puzzle']);
    // }
  }

  goBack() {
    this.location.back();
  }

}