import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MapPage } from '../map/map';


@Component({
  selector: 'page-Tokyo4',
  templateUrl: 'Tokyo4.html'
})
export class Tokyo4Page {
  test: any;
  slat: any;
  slng: any;
  L1: any;
  L2: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.test = 'asdasd';
    this.geolocation.getCurrentPosition().then((resp) => {
      this.slat = resp.coords.latitude;
      this.slng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.L1= "35.713870";
    this.L2= "139.775965";
  }
  MapTokyo4() {
    this.navCtrl.push(MapPage, { a: 'ตำแหน่งปัจจุบันของคุณ', b: 'ชิบูย่า', slat: this.slat, slng: this.slng, L1: this.L1, L2: this.L2 });
  }
}
