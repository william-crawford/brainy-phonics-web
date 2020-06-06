import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login-service.service';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  imgs = [];
  selectedImg = [];

  constructor(
    private loginService: LoginService,

    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    for (let i = 0; i < 26; i++) {
      this.imgs.push({
        url: `../../../assets/img/login/${String.fromCharCode(97 + i)}.png`,
        id: String.fromCharCode(97 + i)
      });
    }
  }

  ngOnInit() {

  }

  onImg(img) {
    if (this.selectedImg.length < 5) {
      // Remove dotted border
      var temp = <HTMLElement>document.getElementsByClassName('placeholder')[this.selectedImg.length];
      temp.style.border = 'white solid';
      temp.style.background = 'white';

      // Add letter to passcode
      this.selectedImg.push(img);
    }
  }

  onSelected(img) {
    // Remove letter from passcode
    const index = this.selectedImg.indexOf(img);
    if (index === this.selectedImg.length - 1) {
      this.selectedImg.length--;
    }
    delete this.selectedImg[index];

    // Remove dotted border
    var temp = <HTMLElement>document.getElementsByClassName('placeholder')[index];
    temp.style.border = '#797979 0.3vh dotted';
    temp.style.background = 'transparent';
  }

  private submit() {
    if (this.selectedImg.length === 5) {
      var passcode = this.selectedImg[0].id + this.selectedImg[1].id + this.selectedImg[2].id + this.selectedImg[3].id + this.selectedImg[4].id;
      
      this.loginService.login(passcode)
      .subscribe(
        res => {
          this.router.navigate(['home'])
        },
        err => {
          alert(err['error']['message']);
        }
      );
    }
  }
}
