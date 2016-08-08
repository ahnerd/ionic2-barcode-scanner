import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the ScannedPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/scanned-page/scanned-page.html',
})
export class ScannedPage {
	private bcData;
  constructor(private navCtrl: NavController,navParams: NavParams) {
  		this.bcData = navParams.get('data');

  }

}
