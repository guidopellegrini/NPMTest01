import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonLibraryModule } from 'common-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
