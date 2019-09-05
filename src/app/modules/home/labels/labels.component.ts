import { Component, OnInit , Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  @Input() src: string;
  @Input() name: string;
  @Input() address: string;
  @Input() seen: string;
  @Input() share: string;
  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }
}
