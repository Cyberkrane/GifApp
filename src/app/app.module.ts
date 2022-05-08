import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer/footer.component';
import { GifsModule } from './gifs/gifs.module';
import { HistorialComponent } from './historial/historial/historial.component';


@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
