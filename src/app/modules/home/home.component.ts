import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  items = [
    {
      titel: 'RESPONSIVE LAYOUT',
      value: 'The past few years have seen a dramatic change in the public perception of cosmetic surgery.',
      url: '/assets/img/responsive.png'
    },
    {
      titel: 'PIXEL PERFECT',
      value: 'About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. ',
      url: '/assets/img/diamond.png'
    },
    {
      titel: 'ORGANIZED LAYERS',
      value: 'Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone?',
      url: '/assets/img/layers.png'
    }
  ];

  cmts = [
    {
      name: 'LULU HOFFMAN',
      job: 'Marketing Consultant at okodesign.net',
      cmt: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions change…like the weather, opinions change frequently.',
      avatar: '/assets/img/person.png',
      icons: 'instagram twiter google',
      highlight: false
    },
    {
      name: 'ELSIE DUNCAN',
      job: 'Project Manager at okodesign.net',
      cmt: 'Ever heard of the Fuller Brush Man? You know, those legendary guys who came knocking on the front doors of America, selling brushes, mops and cleaners?',
      avatar: '/assets/img/Rectangle 524.png',
      icons: 'facebook twiter',
      highlight: false
    },
    {
      name: 'DUSTIN GONZALES',
      job: 'CEO at hofmannui.net',
      cmt: 'Do you remember the story of “The Wizard of Oz”? In this story we saw the characters of Dorothy, who had wanted to run away from home because she thought there was a better place somewhere.',
      avatar: '/assets/img/person (1).png',
      icons: 'facebook instagram google',
      highlight: false
    },
    {
      name: 'LAURA PARKS',
      job: 'UX Lead at hofmannui.net',
      cmt: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise.',
      avatar: '/assets/img/person (2).png',
      icons: 'facebook instagram twiter google',
      highlight: true
    }
  ];
  plans = [
    {
      title: 'SILVER',
      price: '49',
      list: 'Personal Account*25 GB Discspace*50 Uploads per day',
    },
    {
      title: 'GOLD',
      price: '99',
      list: 'Personal Account*50 GB Discspace*500 Uploads per day',
    },
    {
      title: 'PLATINUM',
      price: '299',
      list: 'Team Account*500 GB Discspace*Unlimited Uploads per day',
    }
  ];
  ngOnInit() {
  }

}
