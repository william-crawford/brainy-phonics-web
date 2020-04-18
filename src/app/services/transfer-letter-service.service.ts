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
    private list: Phoneme[] | AlphabetLetter[];

    setList(list: Phoneme[] | AlphabetLetter[]) {
        this.list = list;
    }

    getList(): Phoneme[] | AlphabetLetter[] {
        return this.list;
    }

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
