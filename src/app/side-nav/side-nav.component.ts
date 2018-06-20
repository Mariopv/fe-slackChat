import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  username = 'temedica';
  login: boolean = true;

  constructor() {}

  logout() {
    console.log('Logout success');
  }

}
