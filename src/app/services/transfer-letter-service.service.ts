import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AlphabetLetter} from '../types/alphabet-letter';
import {Phoneme} from '../types/phoneme';

@Injectable({
    providedIn: 'root'
})

export class TransferLetterService {

    constructor(private router: Router) {
    }

    private data: Phoneme | AlphabetLetter;

    setData(data) {
        this.data = data;
    }

    getData() {
        if (!this.data) {
            this.router.navigate(['']);
        }
        return this.data;
    }

    clearData() {
        this.data = undefined;
    }
}
