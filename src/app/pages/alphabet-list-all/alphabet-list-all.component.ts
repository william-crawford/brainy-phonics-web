import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'alphabet-list-all.component.html',
    styleUrls: ['alphabet-list-all.component.css',
        '../../main.css']
})
export class AlphabetListAllComponent implements OnInit {
	letters = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
}
