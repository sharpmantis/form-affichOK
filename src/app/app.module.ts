import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AjoutComponent } from './components/ajout/ajout.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
