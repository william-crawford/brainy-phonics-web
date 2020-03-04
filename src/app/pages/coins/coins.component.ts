import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css' ,
              '../../main.css' ]
})
export class CoinsComponent implements OnInit {
  coins: number;

  constructor(private userDataService: UserDataService) {
    this.coins = userDataService.getCoins();
   }

  ngOnInit() {
    // display image depending on how many coins user has accumulated
  }

}
