import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var docCrop: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goCapture() {
    console.log(docCrop.docCrop());

  }

}
