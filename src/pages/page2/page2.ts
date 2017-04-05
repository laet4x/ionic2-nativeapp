import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  public images: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker) {

  }

   pickImage(){
    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };
    var image = []
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
            //this.image = results[i];
        
            image.push(results[i]);
      }
    this.images = image;
    }, (err) => { 
      //error here
    });

   } //end of function

}
