import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { CameraPage} from '../pages/camera/camera';
import { Angularfire2Page } from '../pages/angularfire2/angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCWt5GCxnBgjnPlcOI5aabpKvfKgYSFqWc",
    authDomain: "travel-app-69ff2.firebaseapp.com",
    databaseURL: "https://travel-app-69ff2.firebaseio.com",
    projectId: "travel-app-69ff2",
    storageBucket: "travel-app-69ff2.appspot.com",
    messagingSenderId: "617036971845"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CameraPage,
    Angularfire2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CameraPage,
    Angularfire2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
