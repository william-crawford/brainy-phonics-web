import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins: number;

  constructor(private userDataService: UserDataService) {
    this.coins = userDataService.getCoins();
   }

  ngOnInit() {
    // display image depending on how many coins user has accumulated

    // 1 gold coin = 2 silver coins
    // 1 stack coins = 5 gold 
    // 1 bag of coins = 5 stacks 
    // 1 armored car = 5 bags 
    // 1 bank = 5 armored cars
  }

}
