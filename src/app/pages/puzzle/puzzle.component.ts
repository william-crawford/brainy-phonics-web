import {Component,OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
@Injectable()
export class PuzzleComponent implements OnInit, OnDestroy, AfterViewInit {

  rhyme: HTMLAudioElement;
  img: string;
  text: string;
  phoneme: Phoneme;
  small: Boolean;
  medium: Boolean;
  large: Boolean;
  xlarge: Boolean;

  constructor(
    private transferService: TransferLetterService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
    
  ) { 
    let from = this.activatedRoute.snapshot.queryParamMap.get('from');

    // get phoneme data
    this.phoneme = this.transferService.getData() as Phoneme;
    console.log(this.phoneme.id);
    if (this.phoneme.id === 'C-CK' || this.phoneme.id === 'M-MP'|| this.phoneme.id === 'N-NT' || this.phoneme.id === 'T-tttt-begin') {
      this.medium = true;
    } else if (this.phoneme.id == 'P-PH-begin' || this.phoneme.id === 'S-ST-end') {
      this.large = true;
    } else if (this.phoneme.id === 'T-TH-end') {
      this.xlarge = true;
    } else {
      this.small = true;
    }
    this.img = '../../assets/img/puzzle-pieces/original-composites/puzzle-' + this.phoneme.id + '-composite.png';
    this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',').replace(/\[/g, '(').replace(/]/g, ')')

    // play audio
    this.rhyme = new Audio();
    this.rhyme.src = '../../assets/audio/rhymes/puzzle-' + this.phoneme.id +'-rhyme.mp3';
    this.rhyme.load();
    if (from == 'quiz') {
      this.rhyme.onended = () => {
        this.goBack();
      };
    }
    this.playAudio();

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    if (this.phoneme.id === 'C-CK') {
      var background = <HTMLElement> document.getElementById('background');
      var mainBody = <HTMLElement> document.getElementById('main-body');
      background.style.width = '197vh'
      mainBody.style.width = '176vh';
    }
  }

  ngOnDestroy() {
    this.rhyme.pause();
    this.rhyme = null;
  }

  playAudio() {
    this.rhyme.pause();
    this.rhyme.currentTime = 0;
    this.rhyme.play();
}

  goBack() {
    this.transferService.setData(this.phoneme);
    this.location.back();
  }
}