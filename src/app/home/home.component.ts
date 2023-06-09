import {Component} from '@angular/core';
import {ConfigService} from "../services/config/config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  config = this.configService.config

  constructor(private configService: ConfigService) {
  }

}
