import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
