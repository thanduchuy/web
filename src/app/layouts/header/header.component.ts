import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items = [
    {
      link : '/prices' ,
      content : 'Prices'
    },
    {
      link : '/booking' ,
      content : 'Booking'
    },
    {
      link : '/blog' ,
      content : 'Blog'
    },
    {
      link : '/services' ,
      content : 'Services'
    }
  ];
  ngOnInit() {
  }

}
