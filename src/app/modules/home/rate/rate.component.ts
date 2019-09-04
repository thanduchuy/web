import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  @Input() job: string;
  @Input() cmt: string;
  @Input() connet: string;
  @Input() highlight: string;
  constructor() { }
  items = [];
  bool: boolean;
  ngOnInit() {
    this.items = this.connet.split(' ').map(element => {
      switch (element) {
        case 'facebook': return 'fab fa-facebook-square';
        case 'twiter': return 'fab fa-twitter';
        case 'google': return 'fab fa-google-plus-g';
        case 'instagram': return 'fab fa-invision';
      }
    });
    this.bool = this.highlight === 'true';
  }

}
