import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() price: string;
  @Input() url: string;
  @Input() list: string;

  constructor() { }
  items: string[];
  ngOnInit() {
    this.items = this.list.split('*');
  }

}
