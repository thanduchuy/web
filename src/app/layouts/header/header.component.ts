import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items = [
    { link: '/hotel' , content: 'HOTELS' },
    { link: '/airline' , content: 'AIRLINES' },
    { link: '/vacation' , content: 'VACATIONS' },
    { link: '/find' , content: 'FIND MORE' }
  ];
  ngOnInit() {
  }

}
