import {Component} from '@angular/core';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'brainy-phonics-web';
  startTime;
  endTime;

  constructor(private progressService: ProgressService) {
    this.startTime = new Date();

    window.onbeforeunload  = () => {
      this.endTime = new Date();
      this.progressService.addTime(this.endTime, this.endTime - this.startTime);
    }
  }
}
