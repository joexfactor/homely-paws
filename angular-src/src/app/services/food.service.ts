import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  latitude: number;
  longitude: number;

  constructor(public http: Http) {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  getFoods() {
    // return this.http.get('http://localhost:3000/food')
    //   .map(res => res.json());
    return this.http.get('food')
      .map(res => res.json());
  }

  getNearestFood() {
    // const url = 'http://localhost:3000/food/' + this.latitude + '/' + this.longitude;
    const url = 'food/' + this.latitude + '/' + this.longitude;
    console.log('getNearestFood url: ' + url);
    return this.http.get(url)
      .map(res => res.json());
  }


}
