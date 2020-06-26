import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  bookUrl = environment.baseUrl;
  header = {headers: new HttpHeaders().set('token', localStorage.getItem('token'))};
  constructor(private http: HttpClient) { }

  getCall(url): any{
    return this.http.get(this.bookUrl + url);
  }
  getAllBooks(url): any{
    return this.http.get<string[]>(this.bookUrl + url, this.header);
  }
  postBook(cartObj, url): any{
    return this.http.post(this.bookUrl + url, cartObj, this.header);
  }

  addDetails(customerObj): any{
     return this.http.post(this.bookUrl + '/customer-details/add-details', customerObj, this.header);
  }
  existedDetails(): any{
    return this.http.get(this.bookUrl + '/customer-details/isexisted', this.header);
  }

}
