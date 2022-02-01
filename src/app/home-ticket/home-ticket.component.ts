import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketApiService } from '../service/ticket-api.service';

@Component({
  selector: 'app-home-ticket',
  templateUrl: './home-ticket.component.html',
  styleUrls: ['./home-ticket.component.css']
})
export class HomeTicketComponent implements OnInit {
  moviesList$!:Observable<any[]>;

  constructor(private ticketservice:TicketApiService){ }

  ngOnInit(): void {
    this.moviesList$ = this.ticketservice.getMoviesList();
  }

}
