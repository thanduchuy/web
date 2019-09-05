import { Component, OnInit } from '@angular/core';
import { SayingModel } from 'src/app/shared/models/saying.model';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  dataSaying: SayingModel [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getsaying().subscribe(data => ( this.dataSaying = data["data"]));
  }

}
