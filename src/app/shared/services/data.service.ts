import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'assets/data/';

  constructor(private http: HttpClient) {}

  getstunning() {
    return this.http.get(`${this.url}/stunning.json`);
  }
  getsaying() {
    return this.http.get(`${this.url}/saying.json`);
  }
  getproducts() {
    return this.http.get(`${this.url}/product.json`);
  }
  getpeople() {
    return this.http.get(`${this.url}/people.json`);
  }
   getsub() {
    return this.http.get(`${this.url}/subscribing.json`);
  }
}
