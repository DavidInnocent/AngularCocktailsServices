import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private REST_API_SERVER = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest():Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
