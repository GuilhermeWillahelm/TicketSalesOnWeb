import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketApiService {
  private readonly apiUrl = "https://localhost:7142/api/";

  constructor(private http: HttpClient) { }

  //Movies
  getMoviesList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'Movies');
  }

  addMovie(data: any) {
    return this.http.post(this.apiUrl + "Movies", data);
  }

  updateMovie(id: number | string, data: any) {
    return this.http.put(this.apiUrl + `Movies/${id}`, data);
  }

  deleMovie(id: number | string) {
    return this.http.delete(this.apiUrl + `Movies/${id}`);
  }
}
