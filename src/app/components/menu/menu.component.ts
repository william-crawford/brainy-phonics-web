import { BgColor } from 'src/app/types/enum';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList = [
    { text: 'Base Word and Endings<br>ed ing', color: BgColor.LightGreen },
    { text: 'Base Words and Endings<br>s es', color: BgColor.Green },
    { text: 'Comparative<br>Endings', color: BgColor.LightYellow },
    { text: 'Plurals', color: BgColor.Brown },
    { text: 'Possessives', color: BgColor.Pink },
    { text: 'Contractions', color: BgColor.LightOrange },
    { text: 'Compound<br>Words', color: BgColor.Purple },
    { text: 'Prefixes', color: BgColor.Blue },
    { text: 'Suffixes', color: BgColor.Yellow },
    { text: 'Syllables', color: BgColor.Orange }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  addIndexText(index: number, text: string) {
    return `${index + 1}<br>${text}`;
  }

  bgColor(color: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`var(${color})`);
  }
}
