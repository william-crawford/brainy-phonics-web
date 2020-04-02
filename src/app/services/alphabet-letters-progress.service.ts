import { Injectable, Inject } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {TransferLetterService} from './transfer-letter-service.service';

@Injectable({
  providedIn: 'root'
})

export class AlphabetLettersProgressService {

  public letter_progress_data: any=[]
  public letters: any=[]

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private transferLetterService: TransferLetterService) {
    // this.letters.add(this.transferLetterService.getData());
    console.log(this.letters)
    //  this.storage.set()
  }

  saveStarsToLetter(key, val): void {
    console.log('received= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.letter_progress_data[key]= this.storage.get(key);
  }

  getStarsFromLetter(key): void {
      console.log('received= key:' + key);
      this.letter_progress_data[key]= this.storage.get(key);
      console.log(this.letter_progress_data);
  }
}
