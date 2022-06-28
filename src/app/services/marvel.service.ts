import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = environment.urlMarvelApi;
  constructor(private http: HttpClient) { }
  getMarvel(){
    const query = {
      q: "", 
      from: "",
      sortBy: "",
      apiKey: "a8ca78a8bb2f576761856f4dd87b3de2"
    }
    
    return this.http.get(`${this.url}/v2/everything`,{params: query});
  }
}