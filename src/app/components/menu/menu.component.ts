import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Menu } from './menu.model';
import { MenuOptions } from './menu.options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isWSMenu: boolean;
  menu: Menu;

  constructor(private sanitizer: DomSanitizer, private location: Location) {}

  ngOnInit() {
    this.isWSMenu = this.getMenuType();
    this.menu = this.isWSMenu
      ? MenuOptions.wordStructures
      : MenuOptions.figuresOfSpeech;
  }

  addIndexText(index: number, text: string) {
    return `${this.menu.startIndex + index}<br>${text}`;
  }

  bgColor(color: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`var(${color})`);
  }

  getMenuType() {
    return !this.location.path().includes('figures-of-speech');
  }
}
