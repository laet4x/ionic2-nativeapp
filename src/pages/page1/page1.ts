import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {
    
  }

  on(){
    this.flashlight.switchOn();
  }

  off(){
    this.flashlight.switchOff();
  }
}
