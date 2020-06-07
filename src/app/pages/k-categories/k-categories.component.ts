import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl: 'k-categories.component.html',
    styleUrls: [ 'k-categories.component.css'],
})

export class KCategoriesComponent {
    category: HTMLAudioElement;
    
    constructor(private location: Location) {
    }
    
    playAudio(event){
        this.category = new Audio();
        if (event.target.id === 'letters') {
            this.category.src = '/assets/audio/buttons/letters.mov';
        } else {
            this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        }
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }

    goBack() {
        this.location.back();
    }
}
