import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Phoneme} from '../../types/phoneme';
import {TransferLetterService} from '../../services/transfer-letter-service.service';

@Component({
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
@Injectable()
export class PuzzleComponent implements OnInit {

  rhyme: HTMLAudioElement;
  img: string;
  text: string;
  phoneme: Phoneme;

  constructor(
    private transferService: TransferLetterService,
    private location: Location
  ) { 
    this.phoneme = this.transferService.getData() as Phoneme;
    this.img = '../../assets/img/puzzles/puzzle-' + this.phoneme.id + '.png';
    this.text = this.phoneme.rhyme.replace(/[(]/g, '<span>').replace(/[)]/g, '</span>').replace(/;/g, ',');
    console.log(this.phoneme);
    // this.rhyme = new Audio();
    // this.rhyme.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
    // this.rhyme.load();
    // this.playAudio();
  }

  ngOnInit() {
    
  }

  playAudio() {
    // this.rhyme.pause();
    // this.rhyme.currentTime = 0;
    // this.rhyme.play();
}

  goBack() {
    this.location.back();
  }
}