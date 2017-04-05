import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Angularfire2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-angularfire2',
  templateUrl: 'angularfire2.html'
})
export class Angularfire2Page {
   hotels: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,af: AngularFire) {
    this.hotels = af.database.list('/hotel');
  }

}
