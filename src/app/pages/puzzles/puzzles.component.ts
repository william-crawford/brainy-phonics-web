import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Phoneme } from '../../types/phoneme';
import { PhonemesService } from '../../services/phonemes.service';
import { ProgressService } from '../../services/progress.service';
import { Router } from '@angular/router';
import { TransferLetterService } from '../../services/transfer-letter-service.service';

@Component({
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit, AfterViewInit {
  data: Phoneme[];

  constructor(
    private transferLetterService: TransferLetterService,
    private phonemesService: PhonemesService,
    private progressService: ProgressService,
    private router: Router,
    private location: Location
  ) {
    // load phonemes data
    this.data = this.phonemesService.dataLoad('phoneme', '', false);
    console.log(this.data);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // set background for completed puzzles
    for (var i = 0; i < this.progressService.getPuzzles().length; i++) {
      document.getElementById(
        this.progressService.getPuzzles()[i]
      ).style.background =
        "url('../../assets/img/puzzle-pieces/puzzle-" +
        this.progressService.getPuzzles()[i] +
        '/puzzle-' +
        this.progressService.getPuzzles()[i] +
        "-composite.png')";
      document.getElementById(
        this.progressService.getPuzzles()[i]
      ).style.backgroundSize = '30vh 39vh';
      document.getElementById(
        this.progressService.getPuzzles()[i]
      ).style.color = 'transparent';
    }
  }

  getDisplay(item: Phoneme) {
    return item.display;
  }

  select(item: Phoneme) {
    this.transferLetterService.setData(item);
    if (this.progressService.getGoldStarsFromKey('phoneme' + item.id) == 5) {
      this.router.navigate(['puzzle']);
    } else {
      this.router.navigate(['phoneme-learn']);
    }
  }

  goBack() {
    this.location.back();
  }

  setID(item: Phoneme) {
    return item.id;
  }
}
