import { HttpClient } from '@angular/common/http';
import {Injectable, Inject} from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    user: string;
    
    constructor(
      @Inject(SESSION_STORAGE) private storage: WebStorageService, 
      private http: HttpClient
    ) { }

    login(passcode) {
      this.user = passcode;
      return this.http.post('https://teacherportal.hearatale.com/api/session/student', { id: passcode });
    }

    setResponse(res: { student: { _id: String}, token: String }){
      this.storage.set('user_id', res.student._id);
      this.storage.set('token', res.token);
    }
  }