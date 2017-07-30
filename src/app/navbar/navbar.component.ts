import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  backgroundColor = environment.navBarBackgraoungColor;

  constructor() { }

  ngOnInit() {
  }

}
