import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OtherService {
  latitude: number;
  longitude: number;

  constructor(public http: Http) {
    // Get current location
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });
  }

  getWifiHotspots() {
    // const url = 'http://localhost:8080/wifiHotspots/' + this.latitude + '/' + this.longitude;
    const url = 'wifiHotspots/' + this.latitude + '/' + this.longitude;
    console.log('getWifiHotspots url: ' + url);
    return this.http.get(url)
      .map(res => res.json());
  }

  getNearestWifiHotspot() {
    // const url = 'http://localhost:8080/wifiHotspot/' + this.latitude + '/' + this.longitude;
    const url = 'wifiHotspot/' + this.latitude + '/' + this.longitude;
    console.log('getNearestWifiHotspot url: ' + url);
    return this.http.get(url)
      .map(res => res.json());
  }
}
