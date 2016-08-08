import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import {ScannedPage} from '../scanned-page/scanned-page';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
   private barcodeText:String;
   private barcodeFormat:String;
   private platform:Platform;	
   private navController:NavController;
  constructor(public navCtrl: NavController,platform:Platform) {
  		this.platform = platform;
        this.navController = navCtrl;
  }
  doScan(){
  		console.log('scannig product barcode');
        this.platform.ready().then(() => {
            BarcodeScanner.scan().then((result) => {
                if (!result.cancelled) {
					this.barcodeText = result.text;
					this.barcodeFormat = result.format;
					this.scanningDone({'text':result.text,'format':result.format});
				}
            }, (error) => {
            	console.log('error when scanning product barcode');
            });
        });  		
  }
  scanningDone(data){
  		this.navController.push(ScannedPage, {data: data});
  }

 }
