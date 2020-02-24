import {Component} from '@angular/core';

@Component({
    templateUrl: 'phoneme-categories.component.html',
    styleUrls: [ 'phoneme-categories.component.css',
                 '../../main.css' ]
})

export class PhonemeCategoriesComponent {
    category: HTMLAudioElement;

    playAudio(event) {
        if (event.target.id == 'vowels') {
            this.category = new Audio();
            this.category.src = '/assets/audio/buttons/vowels.mp3';
            this.category.load();
            this.category.play();
        } else if (event.target.id == 'vowel_pairs') {
            this.category = new Audio();
            this.category.src = '/assets/audio/buttons/vowel_pairs.mp3';
            this.category.load();
            this.category.play();
        } else if (event.target.id == 'consonants') {
            this.category = new Audio();
            this.category.src = '/assets/audio/buttons/consonants.mp3';
            this.category.load();
            this.category.play();
        } else if (event.target.id == 'consonant_blends') {
            this.category = new Audio();
            this.category.src = '/assets/audio/buttons/consonant_blends.mp3';
            this.category.load();
            this.category.play();
        } else if (event.target.id == 'vowel_and_consonants') {
            // this.category = new Audio();
            // this.category.src = '/assets/audio/buttons/vowels_and_consonants.mp3';
            // this.category.load();
            // this.category.play();
        } else if (event.target.id == 'all') {
            // this.category = new Audio();
            // this.category.src = '/assets/audio/buttons/all.mp3';
            // this.category.load();
            // this.category.play();
        }
    }
}
