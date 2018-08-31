import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CognitiveService} from './services/cognitive-service.service'
import {ImageService} from './services/image.service'

import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CognitiveService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
