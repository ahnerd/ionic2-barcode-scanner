import { Component } from '@angular/core';

/*
  Generated class for the ScannedPage component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'scanned-page',
  templateUrl: 'build/components/scanned-page/scanned-page.html'
})
export class ScannedPage {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
