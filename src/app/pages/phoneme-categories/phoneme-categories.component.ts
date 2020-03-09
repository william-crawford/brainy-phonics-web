import {Component} from '@angular/core';

@Component({
    templateUrl: 'phoneme-categories.component.html',
    styleUrls: [ 'phoneme-categories.component.css']
})

export class PhonemeCategoriesComponent {
    category: HTMLAudioElement;

    playAudio(event) {
        this.category = new Audio();
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
        if (this.category.src !== undefined) {
            this.category.load();
            this.category.play();
        }
    }
}
