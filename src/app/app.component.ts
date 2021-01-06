import { Component } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HeyAndes';
  constructor(public infoPage: InfopageService) {
  }
}
