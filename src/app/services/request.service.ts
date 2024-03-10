import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseURL = "https://api.openweathermap.org/data/2.5/"
  constructor(private _httpClient :HttpClient ) { }
  getWhether(lat : any,lon : any, key : any)  {
    return(this._httpClient.get(`${this.baseURL}weather?lat=${lat}&lon=${lon}&appid=${key}`))
  }
}

