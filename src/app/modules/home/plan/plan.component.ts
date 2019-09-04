import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input() title: string;
  @Input() price: string;
  @Input() li: string;
  constructor() { }
  items = [];
  ngOnInit() {
    this.items = this.li.split('*');
  }

}
