import { Component, OnDestroy, OnInit } from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'alphabet-list-all.component.html',
    styleUrls: ['alphabet-list-all.component.css',
        '../../main.css']
})

export class AlphabetListAllComponent {

	constructor(private router: Router) {
	}

	//FIX THIS
    letters: { [key: number]: string } =
        {
            1: 'a',
            2: 'b',
            3: 'c',
            4: 'd',
            5: 'e',
            6: 'f',
            7: 'g',
            8: 'h',
            9: 'i',
            10: 'j',
            11: 'k',
            12: 'l',
            13: 'm',
            14: 'n',
            15: 'o',
            16: 'p',
            17: 'q',
            18: 'r',
            19: 's',
            20: 't',
            21: 'u',
            22: 'v',
            23: 'w',
            24: 'x',
            25: 'y',
            26: 'z'
        };
        
    sortNull() {

    }
}
