import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AjoutComponent } from './components/ajout/ajout.component';

import { AppComponent } from './app.component';
import { ResultatComponent } from './components/resultat/resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ResultatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
