import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HealthcareService {
  latitude: number;
  longitude: number;

  constructor(public http: Http) {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  getHealthcares() {
    // return this.http.get('http://localhost:8080/healthcare')
    //   .map(res => res.json());
    return this.http.get('healthcare')
      .map(res => res.json());
  }

  getNearestHealthcare() {
    // const url = 'http://localhost:8080/healthcare/' + this.latitude + '/' + this.longitude;
    const url = 'healthcare/' + this.latitude + '/' + this.longitude;
    console.log('getNearestHealthcare url: ' + url);
    return this.http.get(url)
      .map(res => res.json());
  }

  getPetHealthcares() {
    // return this.http.get('http://localhost:8080/petHealthcare')
    //   .map(res => res.json());
    return this.http.get('petHealthcare')
      .map(res => res.json());
  }

  getNearestPetHealthcare() {
    // const url = 'http://localhost:8080/petHealthcare/' + this.latitude + '/' + this.longitude;
    const url = 'petHealthcare/' + this.latitude + '/' + this.longitude;
    console.log('getNearestPetHealthcare url: ' + url);
    return this.http.get(url)
      .map(res => res.json());
  }


}
