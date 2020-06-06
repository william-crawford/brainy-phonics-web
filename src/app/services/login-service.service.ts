import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    
    constructor(private http: HttpClient) { }

    login(passcode) {
        return this.http.post('https://teacherportal.hearatale.com/api/session/student', { id: passcode });
    }
  }