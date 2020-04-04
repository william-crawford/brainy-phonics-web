import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
@Injectable()
export class PuzzleComponent implements OnInit {

  rhyme: HTMLAudioElement;
  img: string = '../../assets/img/puzzles/puzzle-A-long.png';
  text: string = "Pat a c<span>a</span>ke, pat a c<span>a</span>ke, B<span>a</span>ker's man,</br>B<span>a</span>ke me a c<span>a</span>ke as fast as you can.</br>Pit it and pat it and mark it with B,</br>And put it in the oven for B<span>a</span>by and me.";

  constructor(
    private location: Location,
    private http: HttpClient
  ) { 
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