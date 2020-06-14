import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  bookUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<string[]>{
    return this.http.get<string[]>(this.bookUrl + '/home');
  }
  sortByPriceAsc(): Observable<string[]>{
    return this.http.get<string[]>(this.bookUrl + '/sort/price-ascending');
  }
  sortByPriceDesc(): Observable<string[]>{
    return this.http.get<string[]>(this.bookUrl + '/sort/price-descending');
  }
  sortByNewArrival(): Observable<string[]>{
    return this.http.get<string[]>(this.bookUrl + '/sort/newest-arrival');
  }
}
