import { Component } from '@angular/core';
import {HeaderComponent} from '../app/components/header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomm';
 isLogin=false;
}
