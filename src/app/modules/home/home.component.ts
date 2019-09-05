import { Component, OnInit } from '@angular/core';
import { StunningModel } from 'src/app/shared/models/stunning.model';
import { ProductModel } from 'src/app/shared/models/product.model';
import { PeopleModel } from 'src/app/shared/models/people.model';
import { SubsModel } from 'src/app/shared/models/subscribing.model';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataStunning: StunningModel [];
  dataProduct: ProductModel [];
  dataPeople: PeopleModel [];
  dataSub: SubsModel [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getstunning().subscribe(data => (this.dataStunning = data['result']));
    this.dataService.getproducts().subscribe(data => (this.dataProduct = data['data']) );
    this.dataService.getpeople().subscribe(data => (this.dataPeople = data['data']));
    this.dataService.getsub().subscribe(data => {this.dataSub = data['data']});
  }
}
