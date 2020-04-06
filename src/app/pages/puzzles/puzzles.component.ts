import {Component, OnInit} from '@angular/core';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {PhonemesService} from '../../services/phonemes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProgressService} from '../../services/progress.service';
import {UserDataService} from '../../services/user-data.service';

@Component({
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  data: Phoneme[];

  constructor(
    private transferLetterService: TransferLetterService,
    private phonemesService: PhonemesService,
    private progressService: ProgressService,
    private userDataService: UserDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
) {
  // load phonemes data
  this.data = this.phonemesService.dataLoad();

  // set background for completed puzzles
  // window.addEventListener('load', function () {
  //   for (var i = 0; i < this.userDataService.getPuzzles().length; i++) {
  //     document.getElementsByClassName(this.userDataService.getPuzzles()[i])[0].style.background = "url('../../assets/img/puzzles/puzzle-"+this.userDataService.getPuzzles()[i]+".png')";
  //     document.getElementsByClassName(this.userDataService.getPuzzles()[i])[0].style.backgroundSize = '32vh 42vh';
  //   }
  // })

}

  ngOnInit() {
    
  }

  getDisplay(item: Phoneme) {
    return item.display;
  }

  select(item: Phoneme) {
    this.transferLetterService.setData(item);
    // if (this.progressService.getStarsFromKey('phoneme' + item.id) == 5) {
      this.router.navigate(['puzzle']);
    // } else {
    //   this.router.navigate(['phoneme-learn']);
    // }
  }

  goBack() {
    this.location.back();
  }

  setClass(item: Phoneme) {
    return item.id;
  }
}