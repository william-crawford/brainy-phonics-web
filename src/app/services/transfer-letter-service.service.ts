import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferLetterService {

  constructor(private router:Router) {
  	console.log('inside tranfer service')
  }

  private data;

  setData(data) {
  	this.data = data;
  	console.log(data);
  }

  getData() {
  	let temp = this.data;
  	this.clearData();
  	return temp;
  }

  clearData() {
  	this.data = undefined;
  }

}
