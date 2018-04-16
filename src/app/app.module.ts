import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StandardComponent } from './standard/standard.component';
import { MainComponent } from './main/main.component';
import { CollageComponent } from './collage/collage.component';


@NgModule({
  declarations: [
    AppComponent,
    StandardComponent,
    MainComponent,
    CollageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
