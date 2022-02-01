import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { MenuticketComponent } from './menuticket/menuticket.component';
import { FooterComponent } from './footer/footer.component';
import { TicketApiService } from './service/ticket-api.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeTicketComponent,
    MenuticketComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TicketApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
