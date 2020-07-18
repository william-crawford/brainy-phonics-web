import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user-service.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  imgs = [];
  selectedImg = [];

  constructor(
    private userService: UserService,

    private router: Router
  ) {
    for (let i = 0; i < 26; i++) {
      this.imgs.push({
        url: `../../../assets/img/login/${String.fromCharCode(97 + i)}.png`,
        id: String.fromCharCode(97 + i)
      });
    }
    for (let i = 0; i < 10; i++) {
      this.imgs.push({
        url: `../../../assets/img/login/${i}.png`,
        id: `${i}`,
      });
    }
  }

  ngOnInit() {

  }

  onImg(img) {
    if(this.selectedImg.includes(undefined)){
      console.log('go')
      for (let index = 0; index <= this.selectedImg.length; index++) {
        console.log( index, this.selectedImg[index])
        if(this.selectedImg[index] === undefined) {
          this.selectedImg[index] = img;
          var temp = <HTMLElement>document.getElementsByClassName('placeholder')[index];
          temp.style.border = 'white solid';
          temp.style.background = 'white';
          break;
        }
      }
    } else if (this.selectedImg.length < 5) {
      // Remove dotted border
      var temp = <HTMLElement>document.getElementsByClassName('placeholder')[this.selectedImg.length];
      temp.style.border = 'white solid';
      temp.style.background = 'white';

      // Add letter to passcode
      this.selectedImg.push(img);
    }
    console.log(this.selectedImg);
  }

  onSelected(img) {
    // Remove letter from passcode
    const index = this.selectedImg.indexOf(img);
    delete this.selectedImg[index];

    // Remove dotted border
    var temp = <HTMLElement>document.getElementsByClassName('placeholder')[index];
    temp.style.border = '#797979 0.3vh dotted';
    temp.style.background = 'transparent';
  }

  submit() {
    if (this.selectedImg.length === 5) {
      var passcode = this.selectedImg[0].id + this.selectedImg[1].id + this.selectedImg[2].id + this.selectedImg[3].id + this.selectedImg[4].id;
      this.userService.login(passcode)
      .subscribe(
        (res: { student: { _id: String}, token: String }) => {
          this.userService.setResponse(res);
          this.router.navigate(['home'])
        },
        err => {
          alert(err['error']['message']);
        }
      );
    }
  }
}
