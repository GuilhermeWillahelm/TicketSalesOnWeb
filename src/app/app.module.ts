import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { MenuticketComponent } from './menuticket/menuticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTicketComponent,
    MenuticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
