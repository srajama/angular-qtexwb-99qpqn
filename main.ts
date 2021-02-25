import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {Component} from '@angular/core';

@Component({
  selector: 'button-example',
  template: `
    <h2>Clicks: {{this.counter}}</h2>

    <div (click)="handleClick()">
      <button mat-raised-button disabled> 
        MatButton
      </button>
    </div>

    <div (click)="handleClick()">
      <button disabled> 
        HTMLButton without wrapper
      </button>
    </div>

    <div (click)="handleClick()">
      <button disabled> 
        <span class="wrapper">
          HTMLButton with wrapper
        </span>
      </button>
    </div>
  `,
})
export class ButtonExample {
  counter = 0;

  handleClick() {
    console.log('outer click');
    this.counter++;
  }
}



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ButtonExample],
  declarations: [ButtonExample],
  bootstrap: [ButtonExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */